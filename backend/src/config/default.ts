export const config = () => {
  const configObj = {
    port: 3008,
    api: {
      apiUrl: process.env.API_URL as string,
      httpTimeout: 1000,
    },
    postgres: {
      url: process.env.DATABASE_URL,
      host: process.env.POSTGRES_HOST as string,
      database: process.env.POSTGRES_DB as string,
      username: process.env.POSTGRES_USER as string,
      password: process.env.POSTGRES_PASSWORD as string,
      port: parseInt(process.env.POSTGRES_PORT || '5432', 10),
    },
    jwt: {
      global: true,
      secret: process.env.JWT_SECRET as string,
      signOptions: {
        expiresIn: process.env.JWT_EXPIRES_IN as string,
      },
    },
  };

  return configObj;
};
