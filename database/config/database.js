const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.db_uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Conectado a MongoDB");
  } catch (error) {
    console.error("❌ Error al conectar a MongoDB:", error.message);
    process.exit(1); // Detener la app si falla la conexión
  }
};

module.exports = { connectDB };
