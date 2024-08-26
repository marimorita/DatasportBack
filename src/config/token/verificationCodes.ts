interface VerificationCode {
    email: string;
    code: string;
    expiresAt: number;
}

const verificationCodes: VerificationCode[] = [];

// 1 minuto: 1 * 60 * 1000
// 5 minutos: 5 * 60 * 1000
// 15 minutos: 15 * 60 * 1000
// 30 minutos: 30 * 60 * 1000
// 1 hora: 60 * 60 * 1000

// Función para almacenar un código de verificación
export const storeVerificationCode = (email: string, code: string) => {
    const expiresAt = Date.now() + 5 * 60 * 1000;
    verificationCodes.push({ email, code, expiresAt });
};

// Función para obtener un código de verificación
export const getVerificationCode = (email: string, code: string) => {
    return verificationCodes.find(
        (vc) => vc.email === email && vc.code === code && vc.expiresAt > Date.now()
    );
};