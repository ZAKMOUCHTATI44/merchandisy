"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import InputWithLabel from "@/components/InputWithLabel";
import PhoneNumber from "@/components/PhoneNumber";

const page = () => {
  return (
    <div>
      <div className="bg-main-color text-white py-32 text-center">
        <h2 className="text-5xl font-bold">Contact</h2>
      </div>
      <div className="container mx-auto my-24">
        <h2 className="text-3xl font-bold  text-center">
          Nous serions ravis de vous aider.
        </h2>
        <div className="w-1/2 mx-auto  my-12">
          <div className="flex flex-col gap-5">
            <h2 className="text-xl">
              Vous souhaitez commencer à habiller vos ambassadeurs ?
            </h2>
            <h2>
              {`Vous voulez parler d'un projet ?`} <br /> Vous souhaitez visiter
            </h2>
            <InputWithLabel
              label="Nom & prènom"
              name="fullName"
              onChange={(e) => console.log(e)}
            />
            <InputWithLabel
              label="Email"
              name="email"
              onChange={(e) => console.log(e)}
            />
            <div className="flex flex-col gap-1.5">
              <Label>Tèlephone</Label>
              <PhoneNumber onChange={(e) => console.log(e)} />
            </div>
            <Button className="bg-main-color text-white hover:bg-white hover:text-main-color border border-main-color">
              Envoyer
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
