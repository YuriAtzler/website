"use client";

import { ContainerSection } from "../container-section";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Select } from "../ui/select";

export function BudgetSection() {
  return (
    <ContainerSection>
      <div className="container grid grid-cols-4 gap-3">
        <Select
          options={[
            {
              label: "Casamento",
              value: "wedding",
            },
            {
              label: "Aniversário",
              value: "birthday",
            },
            {
              label: "Corporativo",
              value: "corporate",
            },
            {
              label: "Outro",
              value: "other",
            },
          ]}
          placeholder="Selecione tipo evento"
          description="Evento"
        />
        <Select
          options={[
            {
              label: "Casamento",
              value: "wedding",
            },
            {
              label: "Aniversário",
              value: "birthday",
            },
            {
              label: "Corporativo",
              value: "corporate",
            },
            {
              label: "Outro",
              value: "other",
            },
          ]}
          placeholder="Selecione como conheceu a gente"
          description="Evento"
        />

        <Input type="date" placeholder="Data do evento" />
        <Input type="number" placeholder="Número de convidados" />

        <div className="flex items-center space-x-2">
          <Checkbox />
          <label>Bar xyz</label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox />
          <label>Bar xyz</label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox />
          <label>Bar xyz</label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox />
          <label>Bar xyz</label>
        </div>

        <Input
          type="text"
          className="col-span-2"
          placeholder="Buscar endereço"
        />

        <Button>Buscar</Button>
        <div className="flex col-span-4 p-24 bg-graydark-6 text-white items-center justify-center">
          google maps
        </div>

        <RadioGroup defaultValue="option-one">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-one" id="option-one" />
            <Label htmlFor="option-one">Option One</Label>
          </div>
          <div className="flex items-center space-x-2 col-span-1">
            <RadioGroupItem value="option-two" id="option-two" />
            <Label htmlFor="option-two">Option Two</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-two" id="option-two" />
            <Label htmlFor="option-two">Option Two</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-two" id="option-two" />
            <Label htmlFor="option-two">Option Two</Label>
          </div>
        </RadioGroup>
      </div>
    </ContainerSection>
  );
}
