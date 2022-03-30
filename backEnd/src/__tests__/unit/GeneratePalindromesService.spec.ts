import { GeneratePalindromesService} from '../../services/GeneratePalindromesService';

describe("Generate palindromes", () => {
    
    let generatePalindromesService: GeneratePalindromesService;
    
    beforeAll(() => {
        generatePalindromesService = new GeneratePalindromesService();
    });

    it("Should generate all the palindrome numbers in an number range.", () => {
        const requestData = {
            initialNumber: 10,
            limitNumber: 120
        };

        const palindromes = generatePalindromesService.execute(requestData);

        expect(palindromes).toEqual([11, 22, 33, 44, 55 ,66 ,77 , 88 , 99, 101, 111]);
    });

    it('Should throw an error "Initial number must be positive!"', () => {
        const requestData = {
            initialNumber: -1000,
            limitNumber: 120
        };

       expect(() => {
           generatePalindromesService.execute(requestData);
       }).toThrow("Initial number must be positive!");
    });

    it('Should throw an error "Limit number must be greater than the initial number!"' ,() => {
        const requestData = {
            initialNumber: 1000,
            limitNumber: 50
        };

        expect(() => {
            generatePalindromesService.execute(requestData);
        }).toThrow("Limit number must be greater than the initial number!");
    })
    
    it('Should throw an error "Limit number must be positive!"', () => {
        const requestData = {
            initialNumber: 10,
            limitNumber: -100
        };

        expect(() => {
            generatePalindromesService.execute(requestData);
        }).toThrow("Limit number must be positive!");
    })
})