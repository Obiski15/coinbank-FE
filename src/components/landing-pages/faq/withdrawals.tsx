import FaqAccordion from "./faq-accordion"

export default function Withdrawals() {
  return (
    <FaqAccordion
      data={[
        {
          title: "How can I withdraw the funds I have received?",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eius dolore sed, alias neque perspiciatis nostrum earum iusto? Amet provident, molestiae quidem est laborum quis ea dolores tempore et odio.",
        },
        {
          title: "Is there a minimum amount that I can withdraw?",
          content:
            "Yes, but very low minimum withdrawal amount to ensure that your funds are always accessible (i.e. avoid generating dust). These minimums fluctuate with exchange rates, but are generally under $0.10.",
        },
        {
          title: "Is there a maximum amount that I can withdraw?",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eius dolore sed, alias neque perspiciatis nostrum earum iusto? Amet provident, molestiae quidem est laborum quis ea dolores tempore et odio.",
        },
        {
          title: "How can I convert my cryptocurrency into bank account?",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eius dolore sed, alias neque perspiciatis nostrum earum iusto? Amet provident, molestiae quidem est laborum quis ea dolores tempore et odio.",
        },
      ]}
    />
  )
}
