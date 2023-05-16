import { WhatsappLogo } from "@phosphor-icons/react";

export default function Whatsapp() {
  return (
    <div className="fixed right-2 bottom-0 z-10">
      <a
        href="https://api.whatsapp.com/send?phone=5522988278379&text=Oi,%20gostaria%20de%20saber%20mais!"
        target="_blank"
      >
        <WhatsappLogo
          color="green"
          weight="fill"
          className="bg-green-50 rounded-full opacity-80"
          style={{ height: "40px", width: "40px" }}
        />
      </a>
    </div>
  );
}
