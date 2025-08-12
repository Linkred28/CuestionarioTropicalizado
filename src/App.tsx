import React from 'react';

function App() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        body {
          font-family: 'Inter', sans-serif;
          background-color: #f3f4f6;
        }
        .card-container {
          display: grid;
          gap: 2rem;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        }
        .card {
          display: flex;
          flex-direction: column;
          background-color: #ffffff;
          border-radius: 1.5rem;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          padding: 2rem;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          position: relative;
        }
        .card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 8px;
          border-radius: 1.5rem 0 0 1.5rem;
        }
        .card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        .card-title {
          font-size: 1.75rem;
          font-weight: 800;
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          color: #1f2937;
        }
        .card-subtitle {
          font-size: 1.125rem;
          font-weight: 700;
          margin-top: 1.5rem;
          margin-bottom: 0.5rem;
          color: #1f2937;
        }
        .alert {
          color: #ef4444;
          font-weight: 600;
          margin-top: 1.5rem;
        }
        .content-section {
          margin-bottom: 1.5rem;
        }
        .icon-container {
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 9999px;
          padding: 0.75rem;
          margin-right: 1rem;
        }
        .icon-svg {
          width: 2.25rem;
          height: 2.25rem;
        }
        .question-box {
          padding: 1rem;
          border-radius: 0.75rem;
          margin-top: 0.5rem;
          box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
        }
        .original-q-box {
          background-color: #f3f4f6;
          color: #4b5563;
        }
        .tropicalized-q-box-1 { background-color: #fffbeb; color: #78350f; }
        .tropicalized-q-box-2 { background-color: #fef2f2; color: #b91c1c; }
        .tropicalized-q-box-3 { background-color: #eff6ff; color: #1e40af; }
        .tropicalized-q-box-4 { background-color: #ecfdf5; color: #065f46; }
        .tropicalized-q-box-5 { background-color: #eef2ff; color: #4338ca; }
        .tropicalized-q-box-6 { background-color: #f5f3ff; color: #6d28d9; }
        
        .card-1::before { background-color: #f59e0b; }
        .card-2::before { background-color: #ef4444; }
        .card-3::before { background-color: #3b82f6; }
        .card-4::before { background-color: #10b981; }
        .card-5::before { background-color: #6366f1; }
        .card-6::before { background-color: #9333ea; }
      `}</style>
      
      <div style={{ backgroundColor: '#f3f4f6' }} className="p-8 min-h-screen">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900">Cuestionario simple (Tropicalizado)</h1>
          <p className="text-gray-500 italic mt-4 text-lg">
            Preguntas clave, concisas y no invasivas; referencia interna con esquemas (uso exclusivo de José).
          </p>
        </header>

        <div className="card-container max-w-7xl mx-auto">
          {/* Tarjeta 1: Núcleo analítico de confianza */}
          <div className="card card-1">
            <h2 className="card-title">
              <span className="icon-container bg-amber-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-svg text-amber-600">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </span>
              Núcleo analítico de confianza
            </h2>
            <div className="text-gray-700">
              <div className="content-section">
                <h3 className="card-subtitle">Pregunta original:</h3>
                <div className="question-box original-q-box">
                  <p>¿Cuántos colaboradores de primera línea participan cotidianamente en las labores analíticas y en la formulación de decisiones estratégicas?</p>
                </div>
              </div>
              <div className="content-section">
                <h3 className="card-subtitle">Pregunta tropicalizada:</h3>
                <div className="question-box tropicalized-q-box-1">
                  <p>En la operación diaria, ¿cuántas personas de tu equipo participan de forma directa en el análisis de información y en tomar decisiones clave para la empresa?</p>
                </div>
              </div>
              <div className="content-section">
                <h3 className="card-subtitle">Guía de interpretación adaptada:</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>1-2 personas → Decisión muy centralizada; riesgo de cuello de botella o dependencia de una sola persona (incluyendo al CEO).</li>
                  <li>3-5 personas → Equipo compacto con cierta redundancia; probable uso de métodos ágiles o juntas informales diarias.</li>
                  <li>Más de 5 o comité interáreas → Cultura más orientada a datos; posible existencia de un área formal de BI (Business Intelligence) o de control de gestión.</li>
                </ul>
              </div>
              <div className="alert">
                <p><strong>Alerta local:</strong> Si solo participa el CEO o un par de directivos, la dependencia es muy alta y cualquier ausencia o cambio puede frenar decisiones críticas.</p>
              </div>
            </div>
          </div>

          {/* Tarjeta 2: Epicentro de fricción operativa */}
          <div className="card card-2">
            <h2 className="card-title">
              <span className="icon-container bg-red-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-svg text-red-600">
                  <path d="M10.29 3.86L1.87 18.04c-.37.6-.02 1.35.61 1.35h16.84c.63 0 .98-.75.61-1.35L13.71 3.86c-.37-.6-.97-.6-1.34 0z"/>
                  <path d="M12 9v4"/>
                  <path d="M12 17h.01"/>
                </svg>
              </span>
              Epicentro de fricción operativa
            </h2>
            <div className="text-gray-700">
              <div className="content-section">
                <h3 className="card-subtitle">Pregunta original:</h3>
                <div className="question-box original-q-box">
                  <p>Identifique el proceso interno que actualmente genera la mayor recurrencia de disrupciones, retrabajos o tensiones interfuncionales.</p>
                </div>
              </div>
              <div className="content-section">
                <h3 className="card-subtitle">Pregunta tropicalizada:</h3>
                <div className="question-box tropicalized-q-box-2">
                  <p>¿Cuál dirías que es hoy el proceso interno que más seguido les genera problemas, retrabajos o roces entre áreas?</p>
                </div>
              </div>
              <div className="content-section">
                <h3 className="card-subtitle">Guía de interpretación adaptada:</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Procesos clave (producción, ventas) → Falta de estandarización; oportunidad de mapear y mejorar (Lean, Six Sigma).</li>
                  <li>Procesos de soporte (RH, finanzas, TI) → Herramientas obsoletas o limitadas; posibles mejoras rápidas con digitalización.</li>
                  <li>Fricciones entre áreas → Silos organizacionales; falta de coordinación y de objetivos compartidos.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tarjeta 3: Mapa de procesos */}
          <div className="card card-3">
            <h2 className="card-title">
              <span className="icon-container bg-blue-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-svg text-blue-600">
                  <path d="M9 12l2 2 4-4"/>
                  <path d="M13 6H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1"/>
                  <path d="M18 12h-5"/>
                  <path d="M13 18h-2"/>
                </svg>
              </span>
              Mapa de procesos
            </h2>
            <div className="text-gray-700">
              <div className="content-section">
                <h3 className="card-subtitle">Pregunta original:</h3>
                <div className="question-box original-q-box">
                  <p>Indicá tres procesos clave que gestionás puertas adentro y tres que hoy delegás afuera.</p>
                </div>
              </div>
              <div className="content-section">
                <h3 className="card-subtitle">Pregunta tropicalizada:</h3>
                <div className="question-box tropicalized-q-box-3">
                  <p>Mencióname tres procesos clave que hoy manejan dentro de la empresa y tres que tienen subcontratados o delegados con proveedores externos.</p>
                </div>
              </div>
              <div className="content-section">
                <h3 className="card-subtitle">Guía de interpretación adaptada:</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Mucho outsourcing → Alta dependencia de proveedores; riesgo de continuidad. <strong>Revisar los contratos para asegurar la calidad y los plazos de entrega (Acuerdo de Nivel de Servicio o SLA).</strong></li>
                  <li>Todo interno → Estructura pesada; potencial de ahorrar con <strong>Subcontratación de Procesos de Negocio (BPO)</strong> o automatización.</li>
                  <li>Combinación equilibrada → Buen criterio para decidir <strong>qué hacer internamente y qué delegar (make-or-buy)</strong>; posibilidad de optimizar costos o tiempos.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tarjeta 4: Ritmo de gobernanza de indicadores */}
          <div className="card card-4">
            <h2 className="card-title">
              <span className="icon-container bg-emerald-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-svg text-emerald-600">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
              </span>
              Ritmo de gobernanza de indicadores
            </h2>
            <div className="text-gray-700">
              <div className="content-section">
                <h3 className="card-subtitle">Pregunta original:</h3>
                <div className="question-box original-q-box">
                  <p>Especifique los KPI o métricas que supervisa con cadencia diaria, semanal, mensual y anual.</p>
                </div>
              </div>
              <div className="content-section">
                <h3 className="card-subtitle">Pregunta tropicalizada:</h3>
                <div className="question-box tropicalized-q-box-4">
                  <p>¿Qué indicadores o métricas revisas de forma diaria, semanal, mensual y anual para dar seguimiento a la operación y a los resultados?</p>
                </div>
              </div>
              <div className="content-section">
                <h3 className="card-subtitle">Guía de interpretación adaptada:</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Diario → Probablemente hay juntas rápidas y seguimiento en Excel o dashboards (Power BI, Tableau).</li>
                  <li>Semanal → Metodologías ágiles, revisiones de sprint y reportes consolidados los viernes.</li>
                  <li>Mensual → Cierre contable/financiero; presentaciones formales para dirección.</li>
                  <li>Anual → Planeación estratégica, bonos, OKRs (Objectives and Key Results).</li>
                </ul>
              </div>
              <div className="alert">
                <p><strong>Alerta local:</strong> Si no hay revisión diaria o semanal, posible baja madurez analítica y poca visibilidad en tiempo real.</p>
              </div>
            </div>
          </div>

          {/* Tarjeta 5: Ángulo muerto de performance */}
          <div className="card card-5">
            <h2 className="card-title">
              <span className="icon-container bg-indigo-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-svg text-indigo-600">
                  <path d="M10.5 12.5c-.75 0-1.25-.5-1.25-1.25s.5-1.25 1.25-1.25"/>
                  <path d="M2 12s2 5 10 5 10-5 10-5"/>
                  <path d="M6 12l-.75-.75"/>
                  <path d="M18 12l.75-.75"/>
                  <path d="M2.5 2.5l19 19"/>
                </svg>
              </span>
              Ángulo muerto de performance
            </h2>
            <div className="text-gray-700">
              <div className="content-section">
                <h3 className="card-subtitle">Pregunta original:</h3>
                <div className="question-box original-q-box">
                  <p>¿En qué indicador clave percibe carencia de visibilidad en tiempo real, limitando la toma de decisiones fundamentadas en evidencia?</p>
                </div>
              </div>
              <div className="content-section">
                <h3 className="card-subtitle">Pregunta tropicalizada:</h3>
                <div className="question-box tropicalized-q-box-5">
                  <p>¿En qué indicador clave sientes que hoy no tienes visibilidad en tiempo real y que eso te limita para tomar decisiones con base en datos?</p>
                </div>
              </div>
              <div className="content-section">
                <h3 className="card-subtitle">Guía de interpretación adaptada:</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>KPI (Key Performance Indicator) no medido = área invisible para la dirección.</li>
                </ul>
              </div>
              <div className="content-section">
                <h3 className="card-subtitle">Ejemplos comunes en empresas mexicanas:</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Churn de clientes → Falta de CRM (Customer Relationship Management) o analítica.</li>
                  <li>Costo unitario real → ERP (Enterprise Resource Planning) incompleto o contabilidad sin desglose.</li>
                  <li>Eficiencia de planta (OEE - Overall Equipment Effectiveness) → Falta de sensores o automatización industrial.</li>
                </ul>
              </div>
              <p>Aquí suelen encontrarse "quick wins" de alto ROI con dashboards, integración de datos o automatización.</p>
            </div>
          </div>

          {/* Tarjeta 6: Transformación prioritaria a 90 días */}
          <div className="card card-6">
            <h2 className="card-title">
              <span className="icon-container bg-violet-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-svg text-violet-600">
                  <path d="M18.5 21a2 2 0 0 0-1.42-.58L10.5 14.5a2 2 0 0 0-1.41-3.46L1.85 9.7a2 2 0 0 0-.96-1.55c-1.3-.65-1.93-1.63-1.93-2.61V.25c0-1.07.72-1.72 1.63-1.72a2.38 2.38 0 0 1 1.55.96L8.85 9.35c.6.6 1.35.98 2.15.98s1.55-.38 2.15-.98l4.24-4.24a2.38 2.38 0 0 1 1.55-.96c.91 0 1.63.65 1.63 1.72v5.39c0 1.07-.63 2.05-1.93 2.61a2 2 0 0 0-.96 1.55l-7.24 7.24a2 2 0 0 0-.58 1.42v.58c0 .88.72 1.5 1.63 1.5h.58a2 2 0 0 0 1.42-.58z"/>
                  <path d="M12 12l2 2"/>
                </svg>
              </span>
              Transformación prioritaria a 90 días
            </h2>
            <div className="text-gray-700">
              <div className="content-section">
                <h3 className="card-subtitle">Pregunta original:</h3>
                <div className="question-box original-q-box">
                  <p>Si pudiera materializar un único cambio operativo tangible en el próximo trimestre, ¿cuál seleccionaría y por qué?</p>
                </div>
              </div>
              <div className="content-section">
                <h3 className="card-subtitle">Pregunta tropicalizada:</h3>
                <div className="question-box tropicalized-q-box-6">
                  <p>Si pudieras implementar un solo cambio importante en la operación durante los próximos tres meses, ¿cuál sería y por qué?</p>
                </div>
              </div>
              <div className="content-section">
                <h3 className="card-subtitle">Guía de interpretación adaptada:</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Cambios tácticos (p. ej., implementar tablero de ventas) → Apetito por resultados rápidos; buen fit para proyectos piloto.</li>
                  <li>Cambios estructurales (reorganizar la cadena de suministro) → Voluntad de inversión y respaldo (sponsorship); necesitará una Oficina de Gestión de Proyectos (PMO) robusta.</li>
                </ul>
              </div>
              <p>El foco elegido revela la agenda oculta del CEO: reducir estrés personal, mostrar logros a la Junta, o preparar ronda de inversión.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;