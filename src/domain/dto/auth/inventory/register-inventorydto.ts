
export class RegisterInvetoryDto {
    private constructor(
        
        public name: string, 
        public quantity: number,
        public state: string,
        public idCenter: number,
    ){}

        static create( object: {[ key: string]: any;}): [ string?, RegisterInvetoryDto?] {

            const { name, quantity, state, idCenter } = object;

            if ( !name ) return [ 'Missing name' ];
            if ( !quantity ) return [ 'Missing quantity' ];
            if ( !state ) return [ 'Missing state' ];
            if ( !idCenter ) return [ 'Missing idCenter' ];
            
            return [
                undefined,
                new RegisterInvetoryDto(name, quantity, state, idCenter)
            ];
        }
}