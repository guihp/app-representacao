import * as Crypto from 'expo-crypto';

export const hashPassword = async (password: string): Promise<string> => {
  // Gera um salt aleatório
  const saltArray = await Crypto.getRandomBytesAsync(16); // 16 bytes = 128 bits
  const salt = Array.from(saltArray).map((b) => b.toString(16).padStart(2, '0')).join('');

  // Combina a senha e o salt
  const passwordWithSalt = password + salt;

  // Gera o hash (usando SHA-256)
  const hash = await Crypto.digestStringAsync(
    Crypto.CryptoDigestAlgorithm.SHA256,
    passwordWithSalt
  );

  // Retorna o hash concatenado com o salt
  return `${salt}$${hash}`;
};

export const validatePassword = async (
  password: string,
  hashedPassword: string
): Promise<boolean> => {
  const [salt, originalHash] = hashedPassword.split('$');
  
  // Recalcula o hash
  const passwordWithSalt = password + salt;
  const recalculatedHash = await Crypto.digestStringAsync(
    Crypto.CryptoDigestAlgorithm.SHA256,
    passwordWithSalt
  );

  // Compara o hash original com o recalculado
  return originalHash === recalculatedHash;
};
