// Grup A sahneleri — TYD, bebek, OED, hava yolu, solunum, derlenme, kalp, inme, nöbet, bilinç, şok.
// Stil: site/css/scenes-a.css (tüm seçiciler .sc-KEY, keyframe adları KEY- önekli).
export default {
  tyd: {
    label: 'Temel Yaşam Desteği',
    tint: '#FFE9E7',
    svg: `<svg class="scene sc-tyd" viewBox="0 0 320 180" role="img" aria-label="Göğsün ortasına düz kollarla ritmik göğüs basısı"><g stroke="#1F2A44" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none">
<ellipse cx="166" cy="151" rx="150" ry="8" fill="#fff" stroke="none" opacity=".7"/>
<path d="M176 136H262" stroke-width="25"/><path d="M176 136H262" stroke="#3E7BFA" stroke-width="19"/>
<path d="M272 116V141" stroke-width="15"/>
<path d="M62 135H84" stroke-width="16"/><path d="M62 135H84" stroke="#F6C9A8" stroke-width="10"/>
<path class="chest" d="M76 148V127Q76 107 96 107H150Q174 107 180 127V148Z" fill="#9EC5FF"/>
<path d="M98 138H150" stroke-width="12"/><path d="M98 138H150" stroke="#F6C9A8" stroke-width="7"/>
<path d="M92 137H108" stroke-width="15"/><path d="M92 137H108" stroke="#9EC5FF" stroke-width="10"/>
<circle cx="48" cy="135" r="17" fill="#1F2A44"/><circle cx="53" cy="131" r="16" fill="#F6C9A8"/>
<path d="M58 124q3.5 2.5 7 0" stroke-width="2.5"/>
<g class="press">
<path d="M128 -8V86" stroke-width="17"/><path d="M128 60V86" stroke="#E3A982" stroke-width="12"/><path d="M128 -8V62" stroke="#B42318" stroke-width="12" stroke-linecap="butt"/>
<path d="M114 -8V86" stroke-width="17"/><path d="M114 60V86" stroke="#F6C9A8" stroke-width="12"/><path d="M114 -8V62" stroke="#E5484D" stroke-width="12" stroke-linecap="butt"/>
<path d="M107.5 62h13M121.5 62h13" stroke-width="2.5"/>
<rect x="100" y="96" width="40" height="11" rx="5.5" fill="#F6C9A8"/>
<rect x="104" y="86" width="33" height="11" rx="5.5" fill="#E3A982"/>
</g>
<path class="mk" d="M92 92q-6 7 0 14M148 92q6 7 0 14" stroke="#E5484D" stroke-width="2.5"/>
<path class="heart" d="M58 78C42 68 40 54 49 50C54 48 58 52 58 56C58 52 62 48 67 50C76 54 74 68 58 78Z" fill="#E5484D"/>
<rect x="228" y="50" width="64" height="30" rx="15" fill="#fff"/>
<text x="260" y="71" text-anchor="middle" font-size="17" fill="#E5484D" stroke="none">30:2</text>
</g></svg>`,
  },

  bebek: {
    label: 'Bebeklerde Uygulama',
    tint: '#FFF0E6',
    svg: `<svg class="scene sc-bebek" viewBox="0 0 320 180" role="img" aria-label="Sırtüstü yatan bebeğin göğsüne iki parmakla nazik bası"><g stroke="#1F2A44" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none">
<rect x="34" y="138" width="218" height="14" rx="7" fill="#9EC5FF"/>
<path d="M156 130L176 112L190 128" stroke-width="16"/><path d="M156 130L176 112L190 128" stroke="#E3A982" stroke-width="11"/>
<path class="chest" d="M104 139V120Q104 102 122 102H146Q166 102 168 122V139Z" fill="#FFC53D"/>
<path d="M162 130L184 110L200 128" stroke-width="17"/><path d="M162 130L184 110L200 128" stroke="#F6C9A8" stroke-width="12"/>
<ellipse cx="205" cy="129" rx="7" ry="5" fill="#F6C9A8"/>
<path d="M118 126L138 130" stroke-width="13"/><path d="M118 126L138 130" stroke="#F6C9A8" stroke-width="8"/>
<circle cx="84" cy="116" r="24" fill="#F6C9A8"/>
<path d="M68 99q-8-5-3-11q6-4 9 3"/>
<path d="M92 108q4 3 8 0" stroke-width="2.5"/>
<circle cx="99" cy="118" r="4" fill="#FF8A65" stroke="none" opacity=".55"/>
<g class="hand">
<path d="M139 74V100" stroke-width="11"/><path d="M139 74V100" stroke="#E3A982" stroke-width="6"/>
<path d="M130 74V102" stroke-width="11"/><path d="M130 74V102" stroke="#F6C9A8" stroke-width="6"/>
<path d="M198 -12L164 44" stroke-width="27"/><path d="M198 -12L164 46" stroke="#12A594" stroke-width="21" stroke-linecap="butt"/>
<path d="M150 42Q170 44 166 62Q162 74 148 78L136 80Q124 80 125 70Q127 52 150 42Z" fill="#F6C9A8"/>
<path d="M146 78q8-2 10-9" stroke-width="2.5"/>
</g>
<path class="h1" d="M56 70C46 63 45 54 51 52C54 51 56 54 56 56C56 54 58 51 61 52C67 54 66 63 56 70Z" fill="#E5484D" stroke-width="2.5"/>
<path class="h2" d="M266 104C258 98 257 91 262 89.5C264.5 88.7 266 91 266 92.5C266 91 267.5 88.7 270 89.5C275 91 274 98 266 104Z" fill="#FF8A65" stroke-width="2.5"/>
<path class="s1" d="M96 26Q97 33 104 34Q97 35 96 42Q95 35 88 34Q95 33 96 26Z" fill="#FFC53D" stroke-width="2"/>
<path class="s2" d="M236 34Q237 41 244 42Q237 43 236 50Q235 43 228 42Q235 41 236 34Z" fill="#FFC53D" stroke-width="2"/>
<path class="s3" d="M288 60Q288.8 65 294 66Q288.8 67 288 72Q287.2 67 282 66Q287.2 65 288 60Z" fill="#FFC53D" stroke-width="2"/>
</g></svg>`,
  },

  oed: {
    label: 'OED (Defibrilatör)',
    tint: '#FFF6DE',
    svg: `<svg class="scene sc-oed" viewBox="0 0 320 180" role="img" aria-label="OED cihazı, göğüsteki pedler ve şok sonrası düzelen kalp ritmi"><defs><clipPath id="oed-scr"><rect x="30" y="56" width="80" height="28" rx="5"/></clipPath></defs><g stroke="#1F2A44" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none">
<path d="M226 50h22v16h-22z" fill="#F6C9A8"/>
<path d="M186 186V98Q186 70 212 64L226 60Q237 70 248 60L262 64Q290 70 290 98V186" fill="#F6C9A8"/>
<circle cx="237" cy="36" r="18" fill="#F6C9A8"/>
<path d="M219 34Q219 18 237 18Q255 18 255 34Q246 27 237 28Q228 27 219 34Z" fill="#1F2A44"/>
<path d="M124 76C156 76 170 93 200 93"/>
<path d="M124 88C166 90 196 140 258 128"/>
<path class="zap" pathLength="100" d="M124 76C156 76 170 93 200 93" stroke="#FFC53D" stroke-width="5"/>
<path class="zap" pathLength="100" d="M124 88C166 90 196 140 258 128" stroke="#FFC53D" stroke-width="5"/>
<rect class="pad" x="200" y="78" width="24" height="30" rx="5" fill="#fff"/>
<rect class="pad" x="256" y="110" width="24" height="30" rx="5" fill="#fff" transform="rotate(-18 268 125)"/>
<rect x="46" y="26" width="48" height="28" rx="9" stroke-width="6"/>
<rect x="16" y="42" width="108" height="104" rx="18" fill="#12A594"/>
<rect x="28" y="54" width="84" height="32" rx="7" fill="#1F2A44"/>
<g clip-path="url(#oed-scr)" stroke="#7EE2B8" stroke-width="2">
<g class="vf"><path class="mv1" d="M28 80l2 1.5 2-8.3 2-3.6 2-1.3 2-4.1 2 2 2 6.6 2 0.7 2-2 2-1 2-2.1 2 4.2 2 9.4 2-3.4 2-14.4 2-5.4 2 5.2 2 7.3 2 6.6 2-0.7 2-8.1 2-0.7 2 6.4 2-0.4 2-3.4 2 0.3 2-3.5 2-5.3 2 3 2 6.6 2 5.1 2 4.3 2-4.8 2-12.5 2-1.3 2 10 2 2.8 2-5.4 2-4.7 2-2.3 2 5.4 2 11.3 2 1.5 2-8.3 2-3.6 2-1.3 2-4.1 2 2 2 6.6 2 0.7 2-2 2-1 2-2.1 2 4.2 2 9.4 2-3.4 2-14.4 2-5.4 2 5.2 2 7.3 2 6.6 2-0.7 2-8.1 2-0.7 2 6.4 2-0.4 2-3.4 2 0.3 2-3.5 2-5.3 2 3 2 6.6 2 5.1 2 4.3 2-4.8 2-12.5 2-1.3 2 10 2 2.8 2-5.4 2-4.7 2-2.3 2 5.4 2 11.3"/></g>
<g class="sr"><path class="mv2" d="M28 71h9q2-4 4 0h3l1.5 2.5 2.5-17 2.5 19.5 1.5-5h4q4-7 8 0h6h9q2-4 4 0h3l1.5 2.5 2.5-17 2.5 19.5 1.5-5h4q4-7 8 0h6h9q2-4 4 0h3l1.5 2.5 2.5-17 2.5 19.5 1.5-5h4q4-7 8 0h6"/></g>
</g>
<path d="M46 132C30 122 30 106 39 104C43 103 46 106 46 109C46 106 49 103 53 104C62 106 62 122 46 132Z" fill="#fff"/>
<path d="M48 108l-6 10h6l-3 8" stroke="#E5484D" stroke-width="2.5"/>
<circle class="ring" cx="92" cy="116" r="15" stroke="#F97316"/>
<g class="btn"><circle cx="92" cy="116" r="15" fill="#F97316"/><path d="M95 106l-7 11h7l-4 9" stroke="#fff" stroke-width="2.5"/></g>
</g></svg>`,
  },

  havayolu: {
    label: 'Hava Yolu Tıkanıklığı',
    tint: '#E4F5F1',
    svg: `<svg class="scene sc-havayolu" viewBox="0 0 320 180" role="img" aria-label="Elleri boğazında, nefes alamayan kişiye arkadan karın basısı; lokma dışarı çıkıyor"><g stroke="#1F2A44" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none">
<path d="M199 56h14v18h-14z" fill="#F6C9A8"/>
<path d="M178 186V98Q180 74 206 72Q232 74 236 98V186" fill="#12A594"/>
<circle cx="206" cy="46" r="16" fill="#F6C9A8"/>
<path d="M190 44Q190 28 206 28Q222 28 222 44Q214 36 206 37Q198 36 190 44Z" fill="#1F2A44"/>
<circle cx="201" cy="48" r="2" fill="#1F2A44" stroke="none"/><circle cx="211" cy="48" r="2" fill="#1F2A44" stroke="none"/>
<g class="vic">
<path d="M149 58h14v18h-14z" fill="#F6C9A8"/>
<path d="M116 186V100Q116 76 140 74H172Q196 76 196 100V186" fill="#FF8A65"/>
<circle cx="156" cy="44" r="19" fill="#F6C9A8"/>
<path d="M137 42Q137 24 156 24Q175 24 175 42Q166 33 156 34Q146 33 137 42Z" fill="#1F2A44"/>
<circle cx="149" cy="45" r="2.2" fill="#1F2A44" stroke="none"/><circle cx="163" cy="45" r="2.2" fill="#1F2A44" stroke="none"/>
<path d="M143 40l7-3M169 40l-7-3" stroke-width="2.5"/>
<ellipse cx="156" cy="55" rx="3.5" ry="4.5" fill="#1F2A44" stroke="none"/>
<path d="M127 88L110 120" stroke-width="18"/><path d="M127 88L110 120" stroke="#FF8A65" stroke-width="13"/>
<path d="M185 88L202 120" stroke-width="18"/><path d="M185 88L202 120" stroke="#FF8A65" stroke-width="13"/>
<path d="M110 120L146 77" stroke-width="15"/><path d="M110 120L146 77" stroke="#F6C9A8" stroke-width="10"/>
<path d="M202 120L166 77" stroke-width="15"/><path d="M202 120L166 77" stroke="#F6C9A8" stroke-width="10"/>
<ellipse cx="148" cy="72" rx="7" ry="6.5" fill="#F6C9A8"/><ellipse cx="164" cy="72" rx="7" ry="6.5" fill="#F6C9A8"/>
</g>
<path class="alarm" d="M127 30l-7-5M125 41h-9M187 30l7-5" stroke="#E5484D" stroke-width="2.5"/>
<g class="thr">
<path d="M104 148L126 144" stroke-width="15"/><path d="M126 144L148 138" stroke-width="15"/>
<path d="M126 144L148 138" stroke="#F6C9A8" stroke-width="10"/><path d="M104 148L127 144" stroke="#12A594" stroke-width="10" stroke-linecap="butt"/>
<path d="M208 148L186 144" stroke-width="15"/><path d="M186 144L164 138" stroke-width="15"/>
<path d="M186 144L164 138" stroke="#F6C9A8" stroke-width="10"/><path d="M208 148L185 144" stroke="#12A594" stroke-width="10" stroke-linecap="butt"/>
<rect x="146" y="128" width="20" height="17" rx="6" fill="#F6C9A8"/>
<path d="M151 133v7M156 133v7M161 133v7" stroke-width="2"/>
</g>
<path class="arr" d="M150 122l6-6 6 6M150 111l6-6 6 6" stroke="#E5484D" stroke-width="3"/>
<g class="food"><path d="M151 55q1-5 6-5q6 0 5 6q-1 5-6 4q-6 0-5-5z" fill="#FFC53D" stroke-width="2.5"/></g>
</g></svg>`,
  },

  solunum: {
    label: 'Solunum ve Hava Yolu',
    tint: '#E7F0FF',
    svg: `<svg class="scene sc-solunum" viewBox="0 0 320 180" role="img" aria-label="Baş geri çene yukarı pozisyonunda açılan hava yolu, nefes alıp veren akciğerler"><g stroke="#1F2A44" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none">
<ellipse cx="166" cy="151" rx="150" ry="8" fill="#fff" stroke="none" opacity=".7"/>
<path d="M228 136H276" stroke-width="25"/><path d="M228 136H276" stroke="#3E7BFA" stroke-width="19"/>
<path d="M286 116V141" stroke-width="15"/>
<circle cx="56" cy="126" r="25" fill="#1F2A44"/>
<path d="M106 107Q90 100 74.4 97.3Q70 92 66.6 93Q62 93.6 59.7 95.4L58.6 97.3L55.8 96.8Q54.6 99.6 53.9 99.4L47.2 96.8Q44.8 102 45.5 106.5L43 108.2Q38 111 38.2 115.3A24 24 0 0 0 73.8 141.7L102 149Z" fill="#F6C9A8"/>
<path d="M47 113q2 4 6 4" stroke-width="2.5"/>
<path class="chest" d="M100 149V124Q100 105 120 105H204Q224 105 230 124V149Z" fill="#E9EEF5"/>
<path d="M58 98Q64 108 74 108L104 114Q116 118 128 124" stroke-width="9"/>
<path d="M58 98Q64 108 74 108L104 114Q116 118 128 124" stroke="#fff" stroke-width="4"/>
<path class="flow" d="M58 98Q64 108 74 108L104 114Q116 118 128 124" stroke="#3E7BFA" stroke-width="2" stroke-dasharray="3 6"/>
<g class="lungs">
<path d="M134 120Q146 108 178 108Q202 108 204 116Q205 123 196 123H140Q134 123 134 120Z" fill="#FF8A65"/>
<path d="M134 128Q146 140 178 140Q202 140 204 132Q205 125 196 125H140Q134 125 134 128Z" fill="#FF8A65"/>
<path d="M126 124h12M138 124l10-7M138 124l10 7" stroke-width="2.5"/>
</g>
<g class="br" stroke="#3E7BFA" stroke-width="2.5"><path d="M46 86q5-4 10 0"/><path d="M43 78q8-6 16 0"/><path d="M40 70q11-8 22 0"/></g>
<g class="hand1">
<path d="M8 40L30 92" stroke-width="20"/><path d="M8 40L28 88" stroke="#8E4EC6" stroke-width="14" stroke-linecap="butt"/>
<path d="M24 92Q34 84 44 96Q48 104 40 108Q30 110 24 102Z" fill="#F6C9A8"/>
</g>
</g></svg>`,
  },

  derlenme: {
    label: 'Derlenme (Kurtarma) Pozisyonu',
    tint: '#E8F6EE',
    svg: `<svg class="scene sc-derlenme" viewBox="0 0 320 180" role="img" aria-label="Yan yatırılmış kişi: üstteki diz bükülü, el yanağın altında; sakin nefes"><g stroke="#1F2A44" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none">
<ellipse cx="164" cy="140" rx="152" ry="22" fill="#fff" stroke="none" opacity=".55"/>
<path d="M180 122H262" stroke-width="23"/><path d="M180 122H262" stroke="#2F67D8" stroke-width="17"/>
<path d="M270 118V132" stroke-width="13"/>
<g class="body"><path d="M82 126Q82 104 104 102H160Q186 104 186 126Q186 146 164 147H104Q82 146 82 126Z" fill="#FF8A65"/></g>
<path d="M178 128L200 148H242" stroke-width="23"/><path d="M178 128L200 148H242" stroke="#3E7BFA" stroke-width="17"/>
<path d="M250 142V156" stroke-width="13"/>
<path d="M100 112L104 144" stroke-width="18"/><path d="M100 112L104 144" stroke="#FF8A65" stroke-width="13"/>
<path d="M104 145H66" stroke-width="15"/><path d="M104 145H66" stroke="#F6C9A8" stroke-width="10"/>
<circle cx="60" cy="116" r="18" fill="#1F2A44"/><circle cx="64" cy="121" r="17" fill="#F6C9A8"/>
<ellipse cx="62" cy="144" rx="12" ry="6" fill="#F6C9A8"/>
<path d="M54 124q2 4 6 4" stroke-width="2.5"/>
<g class="puff" stroke="#3E7BFA" stroke-width="2.5"><circle cx="40" cy="134" r="4"/><circle cx="30" cy="126" r="3"/><circle cx="24" cy="117" r="2"/></g>
</g></svg>`,
  },

  kalp: {
    label: 'Göğüs Ağrısı / Kalp Krizi',
    tint: '#FDECEE',
    svg: `<svg class="scene sc-kalp" viewBox="0 0 320 180" role="img" aria-label="Göğüste atan kalp; ağrı sol kola, çeneye ve sırta yayılıyor"><g stroke="#1F2A44" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none">
<g class="b3" stroke="#E5484D" stroke-width="2.5"><path d="M214 62l6-6M220 70h8M210 56l1-8"/></g>
<path d="M200 86L216 150" stroke-width="18"/><path d="M200 86L216 150" stroke="#fff" stroke-width="13"/>
<circle cx="218" cy="156" r="7" fill="#F6C9A8"/>
<path d="M150 52h20v20h-20z" fill="#F6C9A8"/>
<path d="M108 186V102Q108 76 134 72L148 68H172L186 72Q212 76 212 102V186" fill="#fff"/>
<circle cx="160" cy="38" r="20" fill="#F6C9A8"/>
<path d="M140 36Q140 16 160 16Q180 16 180 36Q172 28 160 29Q148 28 140 36Z" fill="#1F2A44"/>
<circle cx="153" cy="40" r="2.2" fill="#1F2A44" stroke="none"/><circle cx="167" cy="40" r="2.2" fill="#1F2A44" stroke="none"/>
<path d="M147 35l6 2M173 35l-6 2" stroke-width="2.5"/>
<path d="M154 50q3-2 6 0t6 0" stroke-width="2.5"/>
<circle class="glow" cx="180" cy="102" r="20" stroke="#E5484D" stroke-width="2.5"/>
<path class="heart" d="M180 118C164 108 161 93 170 89C175 87 180 91 180 95C180 91 185 87 190 89C199 93 196 108 180 118Z" fill="#E5484D"/>
<g class="ray" stroke="#E5484D" stroke-width="3" stroke-dasharray="0.1 7"><path d="M176 86Q172 70 170 60"/><path d="M193 94Q206 86 208 100L214 138"/><path d="M190 90Q200 80 208 72"/></g>
<g class="b1" stroke="#E5484D" stroke-width="2.5"><path d="M176 56l6-3M178 62l7 1"/></g>
<g class="b2" stroke="#E5484D" stroke-width="2.5"><path d="M226 136l7-2M226 144l7 3M222 150l3 6"/></g>
<path d="M120 86L106 128" stroke-width="18"/><path d="M120 86L106 128" stroke="#fff" stroke-width="13"/>
<path d="M106 128L138 110" stroke-width="18"/><path d="M106 128L138 110" stroke="#fff" stroke-width="13"/>
<rect x="134" y="100" width="20" height="18" rx="7" fill="#F6C9A8"/>
</g></svg>`,
  },

  inme: {
    label: 'İnme (FAST)',
    tint: '#F3ECFB',
    svg: `<svg class="scene sc-inme" viewBox="0 0 320 180" role="img" aria-label="Yüzün bir yanı düşük; F A S T harfleri sırayla yanıyor"><g stroke="#1F2A44" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none">
<circle cx="40" cy="96" r="8" fill="#F6C9A8"/><circle cx="132" cy="96" r="8" fill="#F6C9A8"/>
<circle cx="86" cy="92" r="46" fill="#F6C9A8"/>
<path d="M40 88A46 46 0 0 1 132 88Q124 62 86 64Q48 62 40 88Z" fill="#1F2A44"/>
<path d="M62 80q8-4 16-1" stroke-width="2.5"/><circle cx="70" cy="92" r="4" fill="#1F2A44" stroke="none"/>
<g class="er"><path d="M94 79q8-3 16 1" stroke-width="2.5"/><circle cx="102" cy="92" r="4" fill="#1F2A44" stroke="none"/></g>
<path d="M68 114Q76 121 86 121"/><path class="mr" d="M86 121Q96 121 104 114"/>
<path class="br" d="M200 64C190 62 188 48 196 43C195 33 206 28 214 32C218 24 234 24 238 31C246 26 258 32 256 41C264 44 264 56 256 60C258 68 248 74 240 70C234 76 222 76 218 70C210 74 200 70 200 64Z" fill="#FF8A65"/>
<path d="M210 44q6-4 10 2M228 38q6 4 2 10M242 48q-6 2-6 8M216 60q4-6 10-4" stroke-width="2.5"/>
<circle class="ring" cx="240" cy="54" r="5" stroke="#B42318" stroke-width="2.5"/>
<circle class="spot" cx="240" cy="54" r="5" fill="#E5484D" stroke-width="2.5"/>
<g class="t1"><rect x="152" y="106" width="32" height="34" rx="9" fill="#fff"/><text x="168" y="130" text-anchor="middle" font-size="20" fill="#1F2A44" stroke="none">F</text></g>
<g class="t2"><rect x="190" y="106" width="32" height="34" rx="9" fill="#fff"/><text x="206" y="130" text-anchor="middle" font-size="20" fill="#1F2A44" stroke="none">A</text></g>
<g class="t3"><rect x="228" y="106" width="32" height="34" rx="9" fill="#fff"/><text x="244" y="130" text-anchor="middle" font-size="20" fill="#1F2A44" stroke="none">S</text></g>
<g class="t4"><rect x="266" y="106" width="32" height="34" rx="9" fill="#fff"/><text x="282" y="130" text-anchor="middle" font-size="20" fill="#1F2A44" stroke="none">T</text></g>
</g></svg>`,
  },

  nobet: {
    label: 'Sara / Nöbet',
    tint: '#E9EEFC',
    svg: `<svg class="scene sc-nobet" viewBox="0 0 320 180" role="img" aria-label="Beyinde elektriksel dalgalar; nöbet geçiren kişinin başının altında yumuşak yastık"><g stroke="#1F2A44" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none">
<ellipse cx="166" cy="151" rx="150" ry="8" fill="#fff" stroke="none" opacity=".7"/>
<path d="M32 134Q30 124 42 124H96Q108 124 106 134L104 144Q104 150 96 150H42Q34 150 34 144Z" fill="#9EC5FF"/>
<path d="M42 130q4 4 0 8M96 130q-4 4 0 8" stroke-width="2"/>
<path d="M184 138H266" stroke-width="25"/><path d="M184 138H266" stroke="#3E7BFA" stroke-width="19"/>
<path d="M276 118V143" stroke-width="15"/>
<path d="M74 124H92" stroke-width="16"/><path d="M74 124H92" stroke="#F6C9A8" stroke-width="10"/>
<path d="M86 150V128Q86 112 104 112H160Q180 112 184 128V150Z" fill="#12A594"/>
<path d="M104 140H152" stroke-width="12"/><path d="M104 140H152" stroke="#F6C9A8" stroke-width="7"/>
<circle cx="60" cy="120" r="17" fill="#1F2A44"/><circle cx="65" cy="116" r="16" fill="#F6C9A8"/>
<path d="M70 109q3.5 2.5 7 0" stroke-width="2.5"/>
<g class="mk" stroke="#8E4EC6" stroke-width="2.5"><path d="M160 130q6 6 0 12"/><path d="M290 110q6 8 0 16"/></g>
<g class="z1" stroke="#8E4EC6"><path d="M114 32l-6 6 6 6-6 6 6 6"/><path d="M186 32l6 6-6 6 6 6-6 6"/></g>
<g class="z2" stroke="#8E4EC6"><path d="M98 28l-7 8 7 8-7 8 7 8"/><path d="M202 28l7 8-7 8 7 8-7 8"/></g>
<path class="br" d="M124 62C114 60 112 46 120 41C119 31 130 26 138 30C142 22 158 22 162 29C170 24 182 30 180 39C188 42 188 54 180 58C182 66 172 72 164 68C158 74 146 74 142 68C134 72 124 68 124 62Z" fill="#FF8A65"/>
<path d="M134 42q6-4 10 2M152 36q6 4 2 10M166 46q-6 2-6 8M140 58q4-6 10-4" stroke-width="2.5"/>
</g></svg>`,
  },

  bilinc: {
    label: 'Bilinç / Bayılma',
    tint: '#FFF5E1',
    svg: `<svg class="scene sc-bilinc" viewBox="0 0 320 180" role="img" aria-label="Başı dönen kişi, etrafında dönen yıldızlar; yanında şeker küpü"><g stroke="#1F2A44" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none">
<path d="M112 104h16v18h-16z" fill="#F6C9A8"/>
<path d="M72 186V150Q72 122 102 118H138Q168 122 168 150V186" fill="#3E7BFA"/>
<g class="hd">
<circle cx="120" cy="84" r="30" fill="#F6C9A8"/>
<path d="M90 82Q90 52 120 52Q150 52 150 82Q138 68 120 69Q102 68 90 82Z" fill="#1F2A44"/>
<g class="ez" stroke-width="2.5"><path d="M108 87a1.5 1.5 0 1 1 3 0a3.5 3.5 0 1 1-7 0a5.5 5.5 0 1 1 11 0"/><path d="M130 87a1.5 1.5 0 1 1 3 0a3.5 3.5 0 1 1-7 0a5.5 5.5 0 1 1 11 0"/></g>
<g class="eo" fill="#1F2A44" stroke="none"><circle cx="110" cy="87" r="3.5"/><circle cx="132" cy="87" r="3.5"/></g>
<path class="mz" d="M111 102q2.5-3 5 0t5 0t5 0" stroke-width="2.5"/>
<path class="mo" d="M112 100q9 6 18 0" stroke-width="2.5"/>
</g>
<g class="orb"><g transform="translate(120 46) scale(1 .28)"><g class="spin">
<g transform="translate(44 0)"><g class="cr"><path d="M0-21L3-7 9-7 4.5 4 6 21 0 11-6 21-4.5 4-9-7-3-7Z" fill="#FFC53D" stroke-width="2" vector-effect="non-scaling-stroke"/></g></g>
<g transform="translate(-22 38)"><g class="cr"><path d="M0-21L3-7 9-7 4.5 4 6 21 0 11-6 21-4.5 4-9-7-3-7Z" fill="#FFC53D" stroke-width="2" vector-effect="non-scaling-stroke"/></g></g>
<g transform="translate(-22 -38)"><g class="cr"><path d="M0-21L3-7 9-7 4.5 4 6 21 0 11-6 21-4.5 4-9-7-3-7Z" fill="#FFC53D" stroke-width="2" vector-effect="non-scaling-stroke"/></g></g>
</g></g></g>
<g class="cube">
<path d="M236 94L258 105L236 116L214 105Z" fill="#fff"/>
<path d="M214 105L236 116V140L214 129Z" fill="#E9EEF5"/>
<path d="M236 116L258 105V129L236 140Z" fill="#C5CEDB"/>
<g fill="#C5CEDB" stroke="none"><circle cx="230" cy="104" r="1.3"/><circle cx="240" cy="101" r="1.3"/><circle cx="244" cy="107" r="1.3"/><circle cx="222" cy="116" r="1.3"/><circle cx="228" cy="126" r="1.3"/><circle cx="246" cy="120" r="1.3" fill="#fff"/><circle cx="250" cy="113" r="1.3" fill="#fff"/></g>
</g>
<path class="sp" d="M268 84Q269 90 275 91Q269 92 268 98Q267 92 261 91Q267 90 268 84Z" fill="#FFC53D" stroke-width="2"/>
</g></svg>`,
  },

  sok: {
    label: 'Şok',
    tint: '#E8F0FB',
    svg: `<svg class="scene sc-sok" viewBox="0 0 320 180" role="img" aria-label="Şok pozisyonu: sırtüstü yatan kişinin bacakları destekle yükseltilmiş, üstü örtülü; hızlı ve zayıf nabız"><defs><clipPath id="sok-clip"><rect x="58" y="24" width="120" height="32"/></clipPath></defs><g stroke="#1F2A44" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none">
<ellipse cx="160" cy="151" rx="148" ry="8" fill="#fff" stroke="none" opacity=".7"/>
<rect x="204" y="112" width="48" height="37" rx="6" fill="#FFC53D"/>
<path d="M204 124h48" stroke-width="2"/>
<path d="M158 134L248 90" stroke-width="25"/><path d="M158 134L248 90" stroke="#3E7BFA" stroke-width="19"/>
<path d="M252 92L244 76" stroke-width="15"/>
<path d="M50 134H68" stroke-width="16"/><path d="M50 134H68" stroke="#F6C9A8" stroke-width="10"/>
<path d="M58 148V126Q58 110 76 110H140Q156 110 160 124V148Z" fill="#9EC5FF"/>
<circle cx="38" cy="136" r="15" fill="#1F2A44"/><circle cx="42" cy="132" r="15" fill="#F6C9A8"/>
<path d="M46 124q3 2.5 6 0" stroke-width="2.5"/>
<g class="blk"><path d="M62 150V114Q62 106 72 106H142Q156 106 162 114L212 90Q220 87 221 95L219 116Q198 132 178 146L172 150Z" fill="#FF8A65"/>
<path d="M98 108V150M134 108V150M190 104l8 26" stroke="#FFC53D" stroke-width="3"/></g>
<rect x="20" y="20" width="164" height="40" rx="20" fill="#fff"/>
<path class="hb" d="M42 48C34 43 33 36 37.5 34.5C40 33.7 42 36 42 37.5C42 36 44 33.7 46.5 34.5C51 36 50 43 42 48Z" fill="#E5484D" stroke-width="2.5"/>
<g clip-path="url(#sok-clip)"><path class="pl" d="M58 41h4l1.5-6 2 8.5 1.5-2.5h5h4l1.5-6 2 8.5 1.5-2.5h5h4l1.5-6 2 8.5 1.5-2.5h5h4l1.5-6 2 8.5 1.5-2.5h5h4l1.5-6 2 8.5 1.5-2.5h5h4l1.5-6 2 8.5 1.5-2.5h5h4l1.5-6 2 8.5 1.5-2.5h5h4l1.5-6 2 8.5 1.5-2.5h5h4l1.5-6 2 8.5 1.5-2.5h5h4l1.5-6 2 8.5 1.5-2.5h5h4l1.5-6 2 8.5 1.5-2.5h5h4l1.5-6 2 8.5 1.5-2.5h5" stroke="#E5484D" stroke-width="2.5"/></g>
</g></svg>`,
  },
};
