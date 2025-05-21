'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

export default function DonatePage() {
  const [method, setMethod] = useState('paypal');

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-10 p-10">
      {/* Payment Form */}
      <form className="w-full md:w-1/2 space-y-6 bg-white/60 backdrop-blur-md p-6 rounded-xl shadow-lg">
        <div className='flex justify-between'>
        <h2 className="text-2xl font-bold">Support My Work </h2>
        <h3 className='text-l font-light'>Not Working At Time || Coming Soon </h3>
        </div>

        <div className="space-y-3">
          <label className="block font-semibold">Choose Payment Method</label>
          <select
            className="w-full p-2 rounded border"
            value={method}
            onChange={(e) => setMethod(e.target.value)}
          >
            <option value="paypal">PayPal</option>
            <option value="card">Credit/Debit Card</option>
            <option value="sepa">SEPA Transfer</option>
          </select>
        </div>

        {/* Placeholder for method-specific forms */}
        <div>
          {method === 'paypal' && <p>Redirect to PayPal after submit</p>}
          {method === 'card' && (
            <div className="space-y-2">
              <input className="w-full p-2 border rounded" placeholder="Card Number" />
              <input className="w-full p-2 border rounded" placeholder="MM/YY" />
              <input className="w-full p-2 border rounded" placeholder="CVC" />
            </div>
          )}
          {method === 'sepa' && (
            <input className="w-full p-2 border rounded" placeholder="IBAN" />
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
        >
          Donate
        </button>
      </form>

      {/* Glass Card */}
      <div className="flex-1 flex justify-center items-center">
        <Tilt glareEnable={true} glareMaxOpacity={0.3} scale={1.05} tiltMaxAngleX={10} tiltMaxAngleY={10}>
            <motion.div
              className="w-[400px] h-[250px] rounded-2xl p-4 bg-[#f54e4e5a] backdrop-blur-xl border border-white/40 shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex justify-between text-white">
                <div>
                  <h3 className="text-lg font-bold">ssffoo</h3>
                  <p className="text-sm">Sparkasse</p>
                </div>
                <img src="/sparkasse.svg" alt="Mastercard" className="h-6" />
              </div>
              <div className='relative top-14'>
                <div className="flex justify-between mt-4 text-white text-sm">
                  <p>Yelysei Kudelia</p>
                </div>
                <div className="mt-6 text-white tracking-widest text-l font-mono flex justify-between">
                  <p>DE27 2925 0000 1030 2508 20</p>
                  <p>12/28</p>
                </div>
              </div>
            </motion.div>
        </Tilt>
      </div>
    </div>
  );
}
