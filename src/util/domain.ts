const domains: {
  production: string;
  preProduction: string;
  local: string;
} = {
  production: "/server/",
  preProduction: "https://neuronbica-admin.herokuapp.com/",
  local: "http://localhost:6444/",
};

export default process.env.NODE_ENV === "production"
  ? domains.production
  : domains.local;
