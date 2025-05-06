import FaqAccordion from "./faq-accordion"

export default function Account() {
  return (
    <FaqAccordion
      data={[
        {
          title: "How to verify your identity?",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eius dolore sed, alias neque perspiciatis nostrum earum iusto? Amet provident, molestiae quidem est laborum quis ea dolores tempore et odio.",
        },
        {
          title: "How can I reset my password?",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eius dolore sed, alias neque perspiciatis nostrum earum iusto? Amet provident, molestiae quidem est laborum quis ea dolores tempore et odio.",
        },
        {
          title:
            "I’ve lost access to my two-factor device. How can I get into my account?",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eius dolore sed, alias neque perspiciatis nostrum earum iusto? Amet provident, molestiae quidem est laborum quis ea dolores tempore et odio.",
        },
        {
          title:
            "I never received an account confirmation or password reset email. What should I do?",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eius dolore sed, alias neque perspiciatis nostrum earum iusto? Amet provident, molestiae quidem est laborum quis ea dolores tempore et odio.",
        },
        {
          title: "How do I close my account?",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eius dolore sed, alias neque perspiciatis nostrum earum iusto? Amet provident, molestiae quidem est laborum quis ea dolores tempore et odio.",
        },
      ]}
    />
  )
}
