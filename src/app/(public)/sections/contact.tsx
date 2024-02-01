import { useTheme } from "@/store/theme";
import clsx from "clsx";

import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const HomeSectionContact = () => {
    const { enabled: themeSelection } = useTheme();

    const redes = [
        {
            title: "Linkedin",
            icon: <FaLinkedin className={clsx("text-5xl text-white")} />,
            link: "https://www.linkedin.com/in/guilherme-cardilho/",
            subtitle: "/guilherme-cardilho",
        },
        {
            title: "E-mail",
            icon: <MdEmail className={clsx("text-5xl text-white")} />,
            link: "mailto:gui_cardilho@hotmail.com",
            subtitle: "gui_cardilho@hotmail.com",
        },
    ];

    return (
        <div
            className={clsx(
                "text-white justify-center items-center flex w-full shadow  h-full overflow-hidden",
                {
                    "bg-backgroundCustom-secondary text-white":
                        themeSelection === "dark",
                    "bg-foregroundCustom-secondary text-black":
                        themeSelection === "light",
                }
            )}
        >
            <div className="flex flex-col">
                <div className="flex flex-col gap-2 px-10 py-14 text-center sm:px-20">
                    <p
                        className={clsx({
                            "text-zinc-300": themeSelection === "dark",
                            "text-zinc-600": themeSelection === "light",
                        })}
                    >
                        {themeSelection === "light"
                            ? "Qualquer dúvida, sugestão ou proposta de trabalho"
                            : "Não perca tempo, entre em contato comigo"}
                    </p>

                    <h1
                        className={clsx("text-3xl sm:text-5xl l font-bold", {
                            "text-white": themeSelection === "dark",
                            "text-zinc-800 font-bold ":
                                themeSelection === "light",
                        })}
                    >
                        Cont
                        <span
                            className={clsx(
                                "font-bold text-transparent bg-gradient-to-r bg-clip-text",
                                {
                                    "from-violet-600 to-pink-400":
                                        themeSelection === "dark",
                                    "from-blue-500 to-cyan-600":
                                        themeSelection === "light",
                                }
                            )}
                        >
                            ato.
                        </span>
                    </h1>
                </div>

                <div className="flex gap-6 h-full justify-start text-justify items-start max-w-max overflow-hidden">
                    <div className="flex gap-4 px-4 xs:px-10 sm:px-20 py-14 text-center flex-wrap justify-center items-center ">
                        {redes.map((rede) => (
                            <a
                                key={rede.title}
                                href={rede.link}
                                target="_blank"
                                rel="noreferrer"
                                className={clsx(
                                    "flex flex-col gap-2 px-10 py-14 text-center  rounded-full shadow h-[275px] w-[275px] justify-center items-center	",
                                    {
                                        "text-white font-bold bg-gradient-to-r from-violet-600 to-pink-400":
                                            themeSelection === "dark",
                                        "text-zinc-800 font-bold bg-gradient-to-r from-blue-400 to-cyan-600":
                                            themeSelection === "light",
                                    }
                                )}
                            >
                                <div className="flex flex-col gap-2 items-center">
                                    {rede.icon}
                                    <h1
                                        className={clsx(
                                            "text-2xl sm:text-2xl l font-bold text-white"
                                        )}
                                    >
                                        {rede.title}
                                    </h1>

                                    <p className={clsx("text-xs text-white")}>
                                        {rede.subtitle}
                                    </p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
