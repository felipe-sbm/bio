"use client";
import {
  Smile,
  SmilePlus,
  FileBadge,
  GraduationCap,
  PersonStanding,
  Languages,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import { Navigation } from "../componentes/nav";
import { Card } from "../componentes/card";

const socials = [
  {
    icon: <Smile size={22} />,
    href: "",
    label:
      "Muito prazer e obrigado por estar aqui! Me chamo Felipe Samuel, e comecei na carreira de programação no ano de 2019, mas só me aprofundei no ano de 2022 pelo IMD na UFRN. Estou no primeiro semestre do curso de engenharia da computação na ECT - UFRN. Estou em busca de uma oportunidade de emprego para excercer meus conhecimentos.",
    handle: "Sobre mim",
  },
  {
    icon: <SmilePlus size={22} />,
    href: "",
    label:
      "Sou um programador altamente motivado e apaixonado por tecnologia. Meu objetivo é trabalhar em uma empresa de tecnologia líder no mercado, onde possa aplicar minhas habilidades em programação para desenvolver soluções inovadoras e eficientes para a empresa.",
    handle: "Objetivo profissional",
  },
  {
    icon: <FileBadge size={22} />,
    href: "/certificados/page.tsx",
    label: (
      <div>
        {"Progamação Full Stack (InfoWeb)"}
        <br />
        <strong>{"[IMD - UFRN]"}</strong>
        <br /> <br />
        {"Design Gráfico (WebDesign)"}
        <br />
        <strong>{"[Microlins - Natal]"}</strong>
        <br /> <br />
        {"Modelagem 3D (Blender e MAkeHuman)"}
        <br />
        <strong>{"[IMD - UFRN]"}</strong>
        <br /> <br />
        {"Curso de Inglês"}
        <br />
        <strong>{"[IFRS]"}</strong>
        <br /> <br />
        {"Engenharia da computação"}
        <br />
        <strong>{"[ECT - UFRN]"}</strong>
      </div>
    ),
    handle: "Certificados",
  },
  {
    icon: <GraduationCap size={22} />,
    href: "",
    label: "Ensino médio e técnico completo (2022-2024) e Graduação em engenharia da computação (2024-2028)",
    handle: "Formação acadêmica",
  },
  {
    icon: <PersonStanding size={22} />,
    href: "",
    label:
      "Várias linguagens de programação; Desenvolvimento Full-Stack; Trabalho em equipe; Fácil socialização; Rápida adaptação a novas linguagens de programação",
    handle: "Competencias pessoais",
  },
  {
    icon: <Languages size={22} />,
    href: "",
    label: "Português (nativo) e inglês (proeficiente)",
    handle: "Idiomas",
  },
  {
    icon: <MapPin size={22} />,
    href: "",
    label: "Natal - Rio Grande do Norte, disponibilidade presencial e online",
    handle: "Localização",
  },
];

export default function Example() {
  return (
    <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
        <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
          {socials.map((s) => (
            <Card>
              <Link
                href={s.href}
                target="_blank"
                className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
              >
                <span
                  className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                  aria-hidden="true"
                />
                <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                  {s.icon}
                </span>{" "}
                <div className="z-10 flex flex-col items-center">
                  <span className="text-xl font-medium duration-150 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
                    {s.handle}
                  </span>
                  <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                    {s.label}
                  </span>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
