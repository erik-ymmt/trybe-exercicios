import ICepRepo from "../interfaces/ICepAPI";

class CepService {
  private readonly cepApi: ICepRepo;

  constructor(cepApi: ICepRepo) {
    this.cepApi = cepApi;
  }

  async addressByCep(cep: string, num: number) {
    return await this.cepApi.getAddressByCEP(cep, num);
  }

  async cepByAddress(address: string, num: number) {
    return await this.cepApi.getCepByAddress(address, num);
  }
}

export default CepService;
