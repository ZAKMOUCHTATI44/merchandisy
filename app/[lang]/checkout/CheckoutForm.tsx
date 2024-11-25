"use client"
import PhoneNumber from '@/components/PhoneNumber'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

const CheckoutForm = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="bg-white p-5 rounded-md">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Vos coordonnées.</h2>
        </div>
        <div className="flex flex-col gap-2 mt-6">
          <Label htmlFor="email">E-mail</Label>
          <div>
            <Input
              type="text"
              id="email"
              name="user.email"
              placeholder="E-mail"
            />
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 py-5"
          >
            Je souhaite recevoir les informations et nouveautés de la part de
            MERCHANDISY.
          </label>
        </div>
      </div>
      <div className="bg-white p-5 rounded-md">
        <h2 className="text-2xl font-bold">{" Adresse d'expédition."}</h2>
        <div className="flex flex-col gap-6 mt-6">
          <div className="flex flex-col gap-2">
            <Label htmlFor="name">Nom</Label>
            <div>
              <Input
                type="text"
                id="name"
                name="user.name"
               
                placeholder="Nom"
              />
             
            </div>
          </div>
          <div>
            <PhoneNumber
              onChange={(e) => (console.log(e))}
              value={""}
            />
          </div>
       
              <div className="grid grid-cols-2 gap-2">
                <div className="flex flex-col gap-3">
                  <Label htmlFor="codePostal">Code Postal</Label>
                  <div>
                    <Input
                      id="codePostal"
                      className="col-span-3"
                      name="address.codePostal"
                      placeholder="Code Postal"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <Label htmlFor="city">Ville</Label>
                  <div>
                    <Input
                      id="city"
                      className="col-span-3"
                      name="address.city"
                      placeholder="Ville"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <Label htmlFor="address">
                  Complément d’adresse (bâtiment, étage,...)
                </Label>
                <div>
                  <Input
                    placeholder="Complément d’adresse (bâtiment, étage,...)"
                    name="address.address"
                    id="address"
                  />
                </div>
              </div>
           
          <div className="flex items-center space-x-2">
            <label
              htmlFor="saveInfo"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 py-5"
            >
              Sauvegarder mes coordonnées pour les prochaines commandes.
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutForm