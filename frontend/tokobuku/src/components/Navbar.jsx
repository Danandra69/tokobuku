import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-teal-600 to-cyan-500 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center space-x-2">
           <img 
            src="./src/assets/TL.svg" 
            alt="Samudra Ilmu Logo" 
            className="h-8 w-auto" 
          />
          <h1 className="text-xl font-bold">OceanBook</h1>
        </div>
        <div className="flex items-center space-x-3">
          <Link
            to="/"
            className="px-4 py-2 rounded-lg hover:bg-indigo-600 transition duration-200"
          >
            Beranda
          </Link>
          <Link
            to="/add"
            className="bg-white text-indigo-700 font-semibold px-4 py-2 rounded-lg hover:bg-indigo-50 transition duration-200 shadow-md"
          >
            + Tambah Buku
          </Link>
        </div>
      </div>
    </nav>
  );
}