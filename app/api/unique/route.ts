import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";

interface DadosUniqueProps {
  id: string;
  cnpj: string;
}

export const POST = async (req: Request, res: Response) => {
  const { cnpj }: DadosUniqueProps = await req.json();
  try {
    const uniquecnpj = await prisma.unique.create({
      data: {
        cnpj,
      },
    });
    return NextResponse.json(
      { message: "dados:", uniquecnpj },
      { status: 201 }
    );
  } catch (error) {
    console.log("Ocorreu o erro: ", error);
  }
};
