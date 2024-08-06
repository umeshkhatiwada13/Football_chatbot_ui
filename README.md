# Team Jarvis Football Chatbot

## Project Overview
The Team Jarvis Football Chatbot is an AI-powered conversational agent designed to provide users with comprehensive information and answers related to football. This chatbot leverages the fine-tuned GPT-2 model to deliver accurate responses to a wide range of football-related queries.

## Features
- **Conversational AI:** Engages users with natural language understanding and generation.
- **Domain-Specific Knowledge:** Fine-tuned on a custom football dataset for accurate and relevant responses.
- **Interactive Interface:** Deployed on Hugging Face Spaces with a user-friendly front-end built using Django or Streamlit.

## Technologies Used
- **Hugging Face Transformers:** GPT-2 model fine-tuning.
- **Python:** Backend scripting and model training.
- **Flask:** Interactive front-end development.
- **JavaScript:** Chat storage and interaction handling.

## Project Workflow
1. **Data Preparation:**
   - Collected and prepared a dataset comprising football-related texts.
   - Preprocessed the data to ensure compatibility with the GPT-2 tokenizer.

2. **Model Fine-tuning:**
   - Loaded the pre-trained GPT-2 model and tokenizer.
   - Fine-tuned the model on the prepared dataset using the Hugging Face `Trainer` class.
   - Configured training arguments such as the number of epochs, batch size, and save steps.
   - Trained the model and saved the fine-tuned version.

3. **Model Deployment:**
   - Deployed the fine-tuned model on Hugging Face Spaces for public access.
   - Developed a Django or Streamlit-based front-end to interact with the model.
   - Used Gradio to create an intuitive and interactive interface for users.

4. **Integration and Interaction:**
   - Integrated the front-end with the model to enable real-time question answering.
   - Employed JavaScript to handle chat storage and ensure smooth user interactions.

## Usage
Users can ask the chatbot questions related to football, such as player statistics, match results, historical events, and more. The chatbot processes the input, generates a response using the fine-tuned GPT-2 model, and returns the answer in a conversational format.

## Benefits
- Provides quick and accurate answers to football-related queries.
- Enhances user engagement with an interactive and responsive chatbot.
- Demonstrates the practical application of AI in the sports domain.

## Setup and Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/umeshkhatiwada13/football-chatbot.git
   ```
2. Navigate to the project directory:
   ```bash
   cd football-chatbot
   ```
3. Navigate to the project directory:
   ```bash
   cd football-chatbot
   ```
4. Navigate to the project directory:
   ```bash
   cd football-chatbot
   ```
5. Install the required dependencies:
   ```bash
   pip install -r requirements.txt
   ```
6. Run the Flask application:
   ```bash
   python server.py
   ```

