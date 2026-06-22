const QR = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-8 py-12 print:py-6">
      <div className="text-center max-w-sm w-full">
        <p className="font-hand text-3xl text-purple-700 mb-1" style={{ fontFamily: 'Caveat, cursive' }}>
          магический оракул
        </p>
        <h1 className="text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Cormorant, serif' }}>
          ЧароКот
        </h1>

        <div className="inline-block p-4 rounded-3xl border-4 border-purple-200 shadow-xl">
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://prediction-chat-project--preview.poehali.dev/&color=3b0764&bgcolor=ffffff"
            alt="QR-код ЧароКота"
            width={300}
            height={300}
            className="rounded-xl"
          />
        </div>

        <p className="mt-6 text-xl text-gray-600" style={{ fontFamily: 'Cormorant, serif' }}>
          Отсканируй и узнай своё предсказание
        </p>
        <p className="mt-2 text-sm text-gray-400 break-all">
          prediction-chat-project--preview.poehali.dev
        </p>

        <button
          onClick={() => window.print()}
          className="mt-8 px-8 py-3 rounded-full bg-purple-700 text-white font-semibold hover:bg-purple-800 transition-colors print:hidden"
        >
          Распечатать
        </button>
      </div>
    </div>
  );
};

export default QR;
