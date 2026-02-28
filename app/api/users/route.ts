// app/api/users/route.js
import { db } from '@/lib/db'; // Votre pool de connexion créé précédemment
import { NextRequest, NextResponse } from 'next/server';

// GET : Récupérer tous les utilisateurs
export async function GET() {
  try {
    const [rows] = await db.execute('SELECT * FROM users');
    return NextResponse.json(rows);
  } catch (error: unknown) {
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

// POST : Créer un utilisateur
export async function POST(request:NextRequest) {
  try {
    const { name, email, password } = await request.json();

    // Validation basique
    if (!name || !email) {
      return NextResponse.json({ error: "Champs manquants" }, { status: 400 });
    }

    const [result] = await db.execute(
      'INSERT INTO users (name, email,password) VALUES (?, ?, ?)',
      [name, email,password]
    );

    return NextResponse.json({ name, email }, { status: 201 });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}