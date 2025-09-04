import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Validação básica dos dados (opcional, mas recomendado)
interface EmailData {
  name: string;
  email: string;
  phone: string;
  birth: string;
  cpf: string;
  carInfos: string;
  entryValue: string;
  installmentPayment: string;
}

function isValidEmailData(data: {
  name: string;
  email: string;
  phone: string;
  birth: string;
  cpf: string;
  carInfos: string;
  entryValue: string;
  installmentPayment: string;
}): data is EmailData {
  return (
    typeof data.name === "string" &&
    typeof data.email === "string" &&
    typeof data.phone === "string" &&
    typeof data.birth === "string" &&
    typeof data.cpf === "string" &&
    typeof data.carInfos === "string" &&
    typeof data.entryValue === "string" &&
    typeof data.installmentPayment === "string"
  );
}

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Validação dos dados
    if (!isValidEmailData(data)) {
      return NextResponse.json({ message: "Dados inválidos" }, { status: 400 });
    }

    const {
      name,
      email,
      phone,
      birth,
      cpf,
      carInfos,
      entryValue,
      installmentPayment,
    } = data;
    const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

    // Verificação das variáveis de ambiente
    if (!SMTP_EMAIL || !SMTP_PASSWORD) {
      console.error("Variáveis de ambiente SMTP não configuradas");
      return NextResponse.json(
        { message: "Configuração de email não disponível" },
        { status: 500 }
      );
    }

    // Configuração do transporter (corrigida)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: SMTP_EMAIL,
        pass: SMTP_PASSWORD,
      },
    });

    // Verificar conexão com o SMTP
    try {
      await transporter.verify();
    } catch (verifyError) {
      console.error("Erro na verificação do SMTP:", verifyError);
      return NextResponse.json(
        { message: "Falha na conexão com o servidor de email" },
        { status: 500 }
      );
    }

    const mailOption = {
      from: SMTP_EMAIL,
      to: SMTP_EMAIL,
      replyTo: email,
      subject: `${name} quer uma avaliação de financiamento`,
      html: `
        <div
          style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto"
        >
          <h3 style="color: #333">Olá, Auto Car!</h3>
          <p style="color: #666">
            Você recebeu uma de financiamento através do site:
          </p>

          <div
            style="
              background-color: #f9f9f9;
              padding: 20px;
              border-radius: 5px;
              margin: 20px 0;
            "
          >
            <h4>Dados do cliente:</h4>
            <p><strong>Nome:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Telefone:</strong> <a href="tel:${phone}">${phone}</a></p>
            <p><strong>Data de nascimento:</strong> ${birth}</p>
            <p><strong>CPF:</strong> ${cpf}</p>
            <p style="border-bottom: 1px solid #c4c4c4" />
            <h4>Informações para o financiamento:</h4>
            <p><strong>Carro:</strong> ${carInfos}</p>
            <p><strong>Valor de entrada:</strong> ${entryValue}</p>
            <p><strong>Quantidade de parcelas:</strong> ${installmentPayment}</p>
            <p style="border-bottom:</strong> 1px solid #c4c4c4" />
          </div>

          <div
            style="
              margin-top: 30px;
              padding-top: 20px;
              border-top: 1px solid #eee;
              margin: 0 auto;
              display: flex;
              justify-content: center;
            "
          >
            <img
              src="https://i.ibb.co/BpknszC/auto-car-full-logo.png"
              alt="Auto Car"
            />
          </div>
          <div
            style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee"
          >
            <p style="color: #999; font-size: 12px; text-align: center">
              Este email foi enviado automaticamente através do formulário de
              contato do site.
            </p>
          </div>
        </div>
      `,
      // Texto simples como fallback
      text: `
        Novo contato pelo site - Auto Car

        Nome: ${name}
        Email: ${email}
        Telefone: ${phone}
        CPF: ${cpf}
        Data de nascimento: ${birth}
        Carro: ${carInfos}
        Entrada: ${entryValue}
        Parcelas: ${installmentPayment}

        Este email foi enviado automaticamente através do formulário de contato do site.
      `,
    };

    await transporter.sendMail(mailOption);

    return NextResponse.json(
      { message: "Email enviado com sucesso" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro detalhado no envio do email:", error);

    return NextResponse.json(
      {
        message: "Falha no envio do email",
        error:
          process.env.NODE_ENV === "development" && error instanceof Error
            ? error.message
            : undefined,
      },
      { status: 500 }
    );
  }
}
