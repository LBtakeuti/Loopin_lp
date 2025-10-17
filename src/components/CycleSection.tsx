'use client'

import React from 'react'
import Image from 'next/image'

export default function CycleSection() {
  return (
    <section className="py-24 section-padding bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 font-serif">
            Loopinが実現する循環サイクル
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            思考・実践・結果の継続的な循環により、事業を磨き続けます
          </p>
        </div>

        {/* Cycle Diagram - Desktop and Mobile */}
        <div className="max-w-5xl mx-auto">
          {/* Mobile Layout - Vertical Stack */}
          <div className="flex flex-col items-center gap-12 md:hidden">
            {/* Step 01 - 思考 */}
            <div className="flex flex-col items-center text-center relative">
              <div className="relative mb-6 group">
                <div className="absolute inset-0 bg-blue-400 rounded-full blur-2xl opacity-20"></div>
                <div className="relative w-36 h-36 rounded-full bg-gradient-to-br from-blue-50 to-white border-2 border-blue-400 flex flex-col items-center justify-center shadow-lg">
                  <span className="text-5xl font-bold text-blue-600">01</span>
                  <span className="text-xl font-bold text-blue-700">思考</span>
                  <span className="text-xs text-blue-500 uppercase">THINK</span>
                </div>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                アイデアを論理的に整理し、<br />事業構想を深める
              </p>
            </div>

            {/* Mobile Connector 01→02 */}
            <div className="relative w-0.5 h-12 mx-auto bg-gradient-to-b from-blue-300 to-purple-300"></div>

            {/* Step 02 - 実践 */}
            <div className="flex flex-col items-center text-center relative">
              <div className="relative mb-6 group">
                <div className="absolute inset-0 bg-purple-400 rounded-full blur-2xl opacity-20"></div>
                <div className="relative w-36 h-36 rounded-full bg-gradient-to-br from-purple-50 to-white border-2 border-purple-400 flex flex-col items-center justify-center shadow-lg">
                  <span className="text-5xl font-bold text-purple-600">02</span>
                  <span className="text-xl font-bold text-purple-700">実践</span>
                  <span className="text-xs text-purple-500 uppercase">PRACTICE</span>
                </div>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                事業計画を形にして、実際に<br />行動に移す
              </p>
            </div>

            {/* Mobile Connector 02→03 */}
            <div className="relative w-0.5 h-12 mx-auto bg-gradient-to-b from-purple-300 to-green-300"></div>

            {/* Step 03 - 結果 */}
            <div className="flex flex-col items-center text-center relative">
              <div className="relative mb-6 group">
                <div className="absolute inset-0 bg-green-400 rounded-full blur-2xl opacity-20"></div>
                <div className="relative w-36 h-36 rounded-full bg-gradient-to-br from-green-50 to-white border-2 border-green-400 flex flex-col items-center justify-center shadow-lg">
                  <span className="text-5xl font-bold text-green-600">03</span>
                  <span className="text-xl font-bold text-green-700">結果</span>
                  <span className="text-xs text-green-500 uppercase">RESULT</span>
                </div>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                成果を評価し、次の改善へと<br />つなげる
              </p>
            </div>

            {/* Mobile Connector 03→01 */}
            <div className="relative w-0.5 h-12 mx-auto bg-gradient-to-b from-green-300 to-blue-300"></div>
          </div>

          {/* Desktop Layout - Circular Flow */}
          <div className="hidden md:block relative" style={{ height: '650px', maxWidth: '800px', margin: '0 auto' }}>
            {/* SVG for circular connecting path */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 800 650"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                {/* Gradient for the circular path */}
                <linearGradient id="circular-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.5" />
                  <stop offset="33%" stopColor="#c4b5fd" stopOpacity="0.5" />
                  <stop offset="66%" stopColor="#86efac" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.5" />
                </linearGradient>

                {/* Animated gradient */}
                <linearGradient id="flow-circular" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#60a5fa" stopOpacity="0">
                    <animate attributeName="offset" values="0;1" dur="6s" repeatCount="indefinite" />
                    <animate attributeName="stop-opacity" values="0;0.6;0" dur="6s" repeatCount="indefinite" />
                  </stop>
                  <stop offset="33%" stopColor="#a78bfa" stopOpacity="0">
                    <animate attributeName="offset" values="0.33;1;0.33" dur="6s" repeatCount="indefinite" />
                    <animate attributeName="stop-opacity" values="0;0.6;0" dur="6s" repeatCount="indefinite" />
                  </stop>
                  <stop offset="66%" stopColor="#4ade80" stopOpacity="0">
                    <animate attributeName="offset" values="0.66;1;0;0.66" dur="6s" repeatCount="indefinite" />
                    <animate attributeName="stop-opacity" values="0;0.6;0" dur="6s" repeatCount="indefinite" />
                  </stop>
                </linearGradient>
              </defs>

              {/* Circular path connecting all three steps */}
              <circle
                cx="400"
                cy="325"
                r="220"
                fill="none"
                stroke="url(#circular-gradient)"
                strokeWidth="2"
                opacity="0.6"
              />

              {/* Animated flow circle */}
              <circle
                cx="400"
                cy="325"
                r="220"
                fill="none"
                stroke="url(#flow-circular)"
                strokeWidth="3"
                strokeDasharray="20 10"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 400 325"
                  to="360 400 325"
                  dur="12s"
                  repeatCount="indefinite"
                />
              </circle>

              {/* Direction arrows */}
              {/* Arrow for 01→02 (at ~120 degrees) */}
              <g transform="translate(580, 470)">
                <path
                  d="M 0 0 L -8 -6 L -8 6 Z"
                  fill="#a78bfa"
                  opacity="0.6"
                >
                  <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3s" repeatCount="indefinite" />
                </path>
              </g>

              {/* Arrow for 02→03 (at ~240 degrees) */}
              <g transform="translate(220, 470)">
                <path
                  d="M 0 0 L 8 -6 L 8 6 Z"
                  fill="#4ade80"
                  opacity="0.6"
                >
                  <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3s" begin="1s" repeatCount="indefinite" />
                </path>
              </g>

              {/* Arrow for 03→01 (at ~0 degrees / top) */}
              <g transform="translate(400, 85)">
                <path
                  d="M 0 0 L -6 8 L 6 8 Z"
                  fill="#60a5fa"
                  opacity="0.6"
                >
                  <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3s" begin="2s" repeatCount="indefinite" />
                </path>
              </g>
            </svg>

            {/* Loopin Symbol in center */}
            <div
              className="absolute z-0"
              style={{
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
              }}
            >
              <Image
                src="/images/Loopin_symbolMarc.png"
                alt="Loopin Symbol"
                width={120}
                height={120}
                className="opacity-15"
              />
            </div>

            {/* Step 01 - 思考 (Top) */}
            <div
              className="absolute z-10"
              style={{
                top: '20px',
                left: '50%',
                transform: 'translateX(-50%)'
              }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-4 group">
                  <div className="absolute inset-0 bg-blue-400 rounded-full blur-xl opacity-15 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-blue-50 to-white border-2 border-blue-400 flex flex-col items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <span className="text-4xl font-bold text-blue-600">01</span>
                    <span className="text-lg font-bold text-blue-700">思考</span>
                    <span className="text-[10px] text-blue-500 uppercase tracking-wider">THINK</span>
                  </div>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed max-w-[180px]">
                  アイデアを論理的に整理し、<br />事業構想を深める
                </p>
              </div>
            </div>

            {/* Step 02 - 実践 (Bottom Right) */}
            <div
              className="absolute z-10"
              style={{
                bottom: '60px',
                right: '90px'
              }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-4 group">
                  <div className="absolute inset-0 bg-purple-400 rounded-full blur-xl opacity-15 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-purple-50 to-white border-2 border-purple-400 flex flex-col items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <span className="text-4xl font-bold text-purple-600">02</span>
                    <span className="text-lg font-bold text-purple-700">実践</span>
                    <span className="text-[10px] text-purple-500 uppercase tracking-wider">PRACTICE</span>
                  </div>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed max-w-[180px]">
                  事業計画を形にして、実際に<br />行動に移す
                </p>
              </div>
            </div>

            {/* Step 03 - 結果 (Bottom Left) */}
            <div
              className="absolute z-10"
              style={{
                bottom: '60px',
                left: '90px'
              }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-4 group">
                  <div className="absolute inset-0 bg-green-400 rounded-full blur-xl opacity-15 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-green-50 to-white border-2 border-green-400 flex flex-col items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <span className="text-4xl font-bold text-green-600">03</span>
                    <span className="text-lg font-bold text-green-700">結果</span>
                    <span className="text-[10px] text-green-500 uppercase tracking-wider">RESULT</span>
                  </div>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed max-w-[180px]">
                  成果を評価し、次の改善へと<br />つなげる
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
