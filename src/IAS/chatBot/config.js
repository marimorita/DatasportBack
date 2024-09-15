const dotenv = require('dotenv'); 
dotenv.config();

const API_KEY_GEMINI = process.env.KEY_GEMINI;
const GENERATION_CONFIG = {
  stopSequences: ["red"],
  maxOutputTokens: 400,
  temperature: 0.9,
  topP: 0.1,
  topK: 16,
};
const START_CHAT = [
    {
        role: "user",
        parts: `Nombre de la Empresa: DataSport
  
        Misión: En Data Sport, nos dedicamos a optimizar la gestión de la información en los entornos deportivos. Nos esforzamos por ofrecer soluciones tecnológicas eficientes y fáciles de usar que permitan un control preciso de asistencias y mensualidades, proporcionando a los usuarios una plataforma intuitiva y eficaz que mejore la organización y el rendimiento operativo.
        
        Visión: Aspiramos a ser el referente tecnológico en la gestión de información para centros deportivos, reconocidos por nuestra innovación, calidad y capacidad de adaptación a las necesidades del sector. Buscamos expandirnos a nivel nacional e internacional, brindando herramientas que no solo faciliten la organización, sino que también contribuyan al crecimiento y desarrollo del ámbito deportivo.
        
        Fecha de Creación: Data Sport fue fundado en el año 2024 con el objetivo de modernizar y optimizar la gestión de datos en establecimientos deportivos, en respuesta a la creciente necesidad de digitalización en el sector.
        
        Descripción General:
        Data Sport surge como una solución ante la ineficacia de los métodos tradicionales de organización, como el uso de cuadernos y listas de Excel, que aún predominan en muchos centros deportivos. La aplicación de escritorio está diseñada para mejorar la administración de asistencias, mensualidades y otras tareas operativas, ofreciendo un sistema integrado que facilita la identificación de los usuarios y el control de pagos y fechas clave.
        
        La plataforma permite a los centros deportivos gestionar de forma ágil su información, mejorando la experiencia tanto para los administradores como para los usuarios.
        
        Además de proporcionar un control más preciso, Data Sport se destaca por su enfoque en la sostenibilidad y la escalabilidad.
        
        Está diseñado para adaptarse a las necesidades de cualquier establecimiento deportivo, permitiendo su expansión en diferentes contextos y regiones. Nuestro compromiso es transformar la gestión deportiva mediante la tecnología, facilitando procesos más eficientes y promoviendo el desarrollo de una industria deportiva más organizada y competitiva. `,
      },
      {
        role: "model",
        parts: "Genial empresa!",
      }
]

module.exports = {API_KEY_GEMINI, START_CHAT, GENERATION_CONFIG};