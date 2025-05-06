import FaqAccordion from "./faq-accordion"

export default function Payment() {
  return (
    <FaqAccordion
      data={[
        {
          title: "How do I add a payment method?",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eius dolore sed, alias neque perspiciatis nostrum earum iusto? Amet provident, molestiae quidem est laborum quis ea dolores tempore et odio.",
        },
        {
          title: "How do I verify my bank info?",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eius dolore sed, alias neque perspiciatis nostrum earum iusto? Amet provident, molestiae quidem est laborum quis ea dolores tempore et odio.",
        },
        {
          title: "How to successfully verify a billing address?",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eius dolore sed, alias neque perspiciatis nostrum earum iusto? Amet provident, molestiae quidem est laborum quis ea dolores tempore et odio.",
        },
        {
          title: "Using a bank acount as a payment method",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eius dolore sed, alias neque perspiciatis nostrum earum iusto? Amet provident, molestiae quidem est laborum quis ea dolores tempore et odio.",
        },
      ]}
    />
  )
}
