import { WhatsappLogo } from "@phosphor-icons/react";

export default function Whatsapp() {
  return (
    <div className="fixed left-1 bottom-0">
      <a
        href="https://api.whatsapp.com/send?phone=5522988278379&text=Oi,%20gostaria%20de%20saber%20mais!"
        target="_blank"
      >
        <WhatsappLogo
          color="green"
          weight="fill"
          className="left-1 bottom-0 bg-green-50 rounded-full"
          style={{ height: "45px", width: "45px" }}
        />
      </a>
    </div>
  );
}
