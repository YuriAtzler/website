"use client";

import { ContainerSection } from "../container-section";
import { Button } from "@heroui/button";
import { CheckboxGroup, Checkbox } from "@heroui/checkbox";
import { Input } from "@heroui/input";
import { RadioGroup, Radio } from "@heroui/radio";
import { Select, SelectItem } from "@heroui/select";
import { Textarea } from "@heroui/input";
import { DatePicker } from "@heroui/date-picker";
import { NumberInput } from "@heroui/number-input";

import { addToast } from "@heroui/toast";
export const animals = [
  { key: "cat", label: "Cat" },
  { key: "dog", label: "Dog" },
  { key: "elephant", label: "Elephant" },
  { key: "lion", label: "Lion" },
  { key: "tiger", label: "Tiger" },
  { key: "giraffe", label: "Giraffe" },
  { key: "dolphin", label: "Dolphin" },
  { key: "penguin", label: "Penguin" },
  { key: "zebra", label: "Zebra" },
  { key: "shark", label: "Shark" },
  { key: "whale", label: "Whale" },
  { key: "otter", label: "Otter" },
  { key: "crocodile", label: "Crocodile" },
];

export function BudgetSection() {
  return (
    <ContainerSection>
      <div className="container grid grid-cols-4 gap-3">
        <Select
          className="max-w-xs"
          variant="bordered"
          size="sm"
          placeholder="Select an animal"
        >
          {animals.map((animal) => (
            <SelectItem key={animal.key}>{animal.label}</SelectItem>
          ))}
        </Select>
        <Select
          className="max-w-xs"
          placeholder="Select an animal"
          variant="bordered"
          size="sm"
        >
          {animals.map((animal) => (
            <SelectItem key={animal.key}>{animal.label}</SelectItem>
          ))}
        </Select>
        <DatePicker size="sm" variant="bordered" />
        <Input
          type="number"
          placeholder="Digite um valor"
          variant="bordered"
          size="sm"
        />

        <CheckboxGroup
          className="col-span-4"
          defaultValue={["buenos-aires", "london"]}
          label="Select cities"
          orientation="horizontal"
          size="sm"
        >
          <Checkbox value="buenos-aires">Buenos Aires</Checkbox>
          <Checkbox value="sydney">Sydney</Checkbox>
          <Checkbox value="san-francisco">San Francisco</Checkbox>
          <Checkbox value="london">London</Checkbox>
          <Checkbox value="tokyo">Tokyo</Checkbox>
        </CheckboxGroup>
        <Input
          type="text"
          className="col-span-2"
          placeholder="Buscar endereço"
          variant="bordered"
          size="sm"
        />
        <Button size="sm" variant="solid">
          Buscar
        </Button>
        <div className="flex col-span-4 p-24 bg-graydark-6 text-white items-center justify-center">
          google maps
        </div>
        <RadioGroup
          label="Select your favorite city"
          className="col-span-4"
          orientation="horizontal"
        >
          <Radio value="buenos-aires">Buenos Aires</Radio>
          <Radio value="sydney">Sydney</Radio>
          <Radio value="san-francisco">San Francisco</Radio>
          <Radio value="london">London</Radio>
          <Radio value="tokyo">Tokyo</Radio>
        </RadioGroup>
        <Input type="text" placeholder="Nome" />
        <Input type="email" placeholder="Email" />
        <Input type="tel" placeholder="Telefone" />
        <Textarea
          className="col-span-4"
          placeholder="Digite sua observacao"
          label="Observacao"
        />
        <Button
          onPress={() => {
            addToast({
              title: "Toast Title",
            });
          }}
        >
          Enviar
        </Button>
      </div>
    </ContainerSection>
  );
}
