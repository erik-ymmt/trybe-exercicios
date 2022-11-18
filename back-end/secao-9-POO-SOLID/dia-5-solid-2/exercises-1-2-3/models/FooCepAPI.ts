import fetch, { Response } from "node-fetch";
import IAddressResponse from "../interfaces/IAddressResponse";

class FooCepAPI {
  async getAddressByCEP(cep: string, _number: number): Promise<string> {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const response: Response = await fetch(url);
    const json: IAddressResponse = await response.json();
    const address = json.logradouro;

    return `O endereço para o "CEP:${cep} é endereço ${address}"`;
  }

  async getCepByAddress(address: string, number: number): Promise<string> {
    return `O CEP para: "${address}, n°: ${number}" é "CEP baz"`;
  }
}

export default FooCepAPI;
