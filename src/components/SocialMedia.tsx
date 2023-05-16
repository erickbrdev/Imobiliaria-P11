import {
  FacebookLogo,
  InstagramLogo,
  YoutubeLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";
export default function SocialMedia() {
  const face = "https://www.facebook.com/profile.php?id=100089031726026";
  const insta = "https://www.instagram.com/phelipeimoveiss/";
  const whats =
    "https://api.whatsapp.com/send?phone=5522988278379&text=Oi,%20gostaria%20de%20saber%20mais!";

  return (
    <section className="flex flex-col gap-3 items-center">    
      <div className="flex gap-5 justify-center items-center p-2">
        <a target="_blank" href={face}>
          <FacebookLogo
            style={{ height: "45px", width: "45px" }}
            weight="fill"
            className="hover:bg-yellow-500 bg-yellow-200 p-1 rounded-full"
          />
        </a>
        <a target="_blank" href={insta}>
          <InstagramLogo
            style={{ height: "45px", width: "45px" }}
            weight="fill"
            className="hover:bg-yellow-500 bg-yellow-200 p-1 rounded-full"
          />
        </a>
        <a target="_blank" href={whats}>
          <YoutubeLogo
            style={{ height: "45px", width: "45px" }}
            weight="fill"
            className="hover:bg-yellow-500 bg-yellow-200 p-1 rounded-full"
          />
        </a>
        <a target="_blank" href={whats}>
          <LinkedinLogo
            style={{ height: "45px", width: "45px" }}
            weight="fill"
            className="hover:bg-yellow-500 bg-yellow-200 p-1 rounded-full"
          />
        </a>
      </div>
    </section>
  );
}
