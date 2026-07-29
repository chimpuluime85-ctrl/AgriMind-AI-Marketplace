const getAIAdvice = async (req, res) => {
  try {
    const { message } = req.body;

    let reply =
      "Please ask about rice, maize, cassava, tomato, fertilizer or farming.";

    const text = message.toLowerCase();

    if (text.includes("rice")) {
      reply =
        "Rice grows best in fertile soil with proper irrigation. Apply NPK fertilizer and maintain adequate water levels.";
    }

    else if (text.includes("cassava")) {
      reply =
        "Cassava requires well-drained soil. Use healthy stems for planting and control weeds regularly.";
    }

    else if (text.includes("maize")) {
      reply =
        "Maize performs best with adequate sunlight and NPK fertilizer. Ensure proper spacing between plants.";
    }

    else if (text.includes("tomato")) {
      reply =
        "Tomatoes require regular watering, fertile soil and protection against pests and fungal diseases.";
    }

    else if (text.includes("fertilizer")) {
      reply =
        "Apply fertilizer according to soil requirements. NPK fertilizer is commonly used for many crops.";
    }

    res.status(200).json({
      success: true,
      reply,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getAIAdvice,
};