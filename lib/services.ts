import prisma from "@/lib/db";

const customer = prisma?.customer.fields;
const clientes = [{ ...customer }];

export const getAllClientes = () => {
  return prisma.customer.findMany({
    orderBy: {
      nome: "asc",
    },
    select: {
      id: true,
      nome: true,
    },
  });
};

export const getById = (id: string) => {
  console.log("id: ", id);
  try {
    const dados = prisma.customer.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        nome: true,
      },
    });
    return dados.then((res) => {
      return res;
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateById = (id: string) => {
  try {
    const dados = prisma.customer.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        nome: true,
      },
    });
    return dados.then((res) => {
      return res;
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteById = (id: string) => {
  try {
    const dados = prisma.customer.findUnique({
      where: {
        id,
      },
    });
    return dados.then((res) => {
      return res;
    });
  } catch (error) {
    console.log(error);
  }
};
