import { faker } from "@faker-js/faker";
import moment from "moment";
import fs from "fs";
import path from "path";

function calculateAge(dob: string | Date) {
  return moment().diff(moment(dob), "years");
}

export function generateGuests(numberOfGuests: number) {
  const guests = [];

  for (let i = 0; i < numberOfGuests; i++) {
    const gender = faker.helpers.arrayElement(["male", "female"]);
    const firstName = faker.person.firstName(
      gender === "male" ? "male" : "female",
    );
    const lastName = faker.person.lastName();
    // Generate date of birth to ensure guest is at least 18 years old
    const dateOfBirth = moment(faker.date.between("1950-01-01", new Date()))
      .subtract(18, "years")
      .toDate();
    const age = calculateAge(dateOfBirth);

    guests.push({
      key: String(i + 1),
      verified: faker.helpers.arrayElement(["Yes", "No"]),
      // avatar: `https://randomuser.me/api/portraits/${gender.toLowerCase()}/${i}.jpg`,
      name: firstName,
      lastName: lastName,
      gender: gender,
      dateOfBirth: moment(dateOfBirth).format("MM/DD/YYYY"),
      age: age,
      email: faker.internet.email(
        firstName.toLowerCase(),
        lastName.toLowerCase(),
      ),
      phone: faker.phone.number("###-###-####"),

      // totalReservations: faker.datatype.number({ min: 0, max: 20 }),
      // lastVisit: moment().format("MM/DD/YYYY"),
      accountType: faker.helpers.arrayElement([
        // "Developer",
        // "CEO",
        // "Supervisor",
        // "Manager",
        "Guest",
        // "Receptionist",
        // "Housekeeping",
      ]),
      accountStatus: faker.helpers.arrayElement(["Active", "Inactive"]),
      identification: faker.helpers.arrayElement(["Cedula", "Passport"]),
      // pendingBalance: `$${faker.commerce.price(0, 5000)}`,
    });
  }

  // const filePath = path.resolve(
  //   process.cwd(),
  //   "public/assets/data/guests.json",
  // );
  // fs.writeFileSync(filePath, JSON.stringify(guests, null, 2), "utf8");

  // return guests;
}
