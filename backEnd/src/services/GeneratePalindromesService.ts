interface Irequest {
    initialNumber: number;
    limitNumber: number;
}

class GeneratePalindromesService {

    execute({initialNumber, limitNumber }: Irequest) {

        if(typeof(initialNumber) == 'string'){
            throw new Error("Initial number must be a number!")
        };

        if(typeof(limitNumber) == 'string') {
            throw new Error("Limit number must be a number!")
        }
        
        const palindromes = [];
        
        for(let i = initialNumber; i <= limitNumber; i++) {
            let convertString = i.toString().split('').reverse().join('');
            
            if( i === parseInt(convertString)) {
                palindromes.push(i);
            };
        }
          
        return palindromes;
    }
};

export { GeneratePalindromesService }