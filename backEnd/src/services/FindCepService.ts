import axios  from 'axios';

interface IRequest {
    cep: [number]
}

class FindCepService {

    async execute({cep}: IRequest) {

        let results = []

        for(let i = 0; i < cep.length; i++) {
            let result = await axios.get(`https://viacep.com.br/ws/${cep[i]}/json/`);
            results.push(result.data)
        };

        return results;

    };
};

export { FindCepService }