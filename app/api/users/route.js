"use server";
import { NextResponse } from "next/server";
import { users } from "@/app/util/db";
import fs from "fs";
export async function GET() {
  const data = users;
  return NextResponse.json({ data }, { status: 200 });
}

export async function POST(req, res) {
  let { id, name, email, password } = await req.json();

  if (!id || !name || !email || !password) {
    return NextResponse.json(
      { result: "required field are not found" },
      { status: 400 }
    );
  } else {
    users.push({
      id,
      name,
      email,
      password,
    });

    const updateUsers = users;
    const updatedData = JSON.stringify(updateUsers, null, 2);

    fs.writeFileSync(
      "./app/util/db.js",
      `export const users = ${updatedData};`,
      "utf-8"
    );

    return NextResponse.json({ success: 'User successfully created' });
  }
}

export async function PUT(req, res) {
  let { id, name, email, password } = await req.json();

  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex === -1) {
    return NextResponse.json({ result: 'User not found' }, { status: 404 });
  }

  if (name) {
    users[userIndex].name = name;
  }

  if (email) {
    users[userIndex].email = email;
  }

  if (password) {
    users[userIndex].password = password;
  }

  const updateUsers = users;
  const updatedData = JSON.stringify(updateUsers, null, 2);

  fs.writeFileSync(
    "./app/util/db.js",
    `export const users = ${updatedData};`,
    "utf-8"
  );

  return NextResponse.json({ success: 'User successfully updated' });

}
