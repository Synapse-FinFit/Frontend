// src/pages/MainDashboardPage.tsx

export const MainDashboardPage = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            <header className="border-b bg-white">
                <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
                    <h1 className="text-xl font-bold text-slate-900">
                        FinFit 대시보드
                    </h1>
                    <p className="text-sm text-slate-500">
                        오늘의 소비 패턴과 금융 정보를 한눈에 확인하세요.
                    </p>
                </div>
            </header>

            <main className="mx-auto max-w-5xl px-6 py-6 space-y-6">
                {/* 상단: 소비 분석 + 미션 */}
                <section className="grid gap-4 md:grid-cols-3">
                    <div className="md:col-span-2 rounded-xl bg-white p-4 shadow-sm">
                        <h2 className="mb-3 text-lg font-semibold text-slate-900">
                            소비 패턴 분석
                        </h2>
                        <p className="text-sm text-slate-500 mb-4">
                            카테고리별 소비 비율을 파이차트로 시각화할 예정입니다.
                        </p>
                        <div className="flex h-40 items-center justify-center rounded-lg border border-dashed border-slate-200 text-sm text-slate-400">
                            {/* TODO: SpendingPieChart 컴포넌트 자리 */}
                            SpendingPieChart 컴포넌트 영역
                        </div>
                    </div>

                    <div className="rounded-xl bg-white p-4 shadow-sm">
                        <h2 className="mb-3 text-lg font-semibold text-slate-900">
                            오늘의 소비 미션
                        </h2>
                        <p className="text-sm text-slate-500 mb-4">
                            AI가 추천한 맞춤형 소비 미션이 이 영역에 표시됩니다.
                        </p>
                        <div className="flex h-40 items-center justify-center rounded-lg border border-dashed border-slate-200 text-sm text-slate-400">
                            {/* TODO: MissionCard 컴포넌트 자리 */}
                            MissionCard 컴포넌트 영역
                        </div>
                    </div>
                </section>

                {/* 중단: 뉴스 + 금융 용어 */}
                <section className="grid gap-4 md:grid-cols-3">
                    <div className="md:col-span-2 rounded-xl bg-white p-4 shadow-sm">
                        <h2 className="mb-3 text-lg font-semibold text-slate-900">
                            오늘의 뉴스
                        </h2>
                        <p className="text-sm text-slate-500 mb-4">
                            금융/경제 관련 주요 뉴스를 요약하여 보여줄 예정입니다.
                        </p>
                        <div className="flex h-32 items-center justify-center rounded-lg border border-dashed border-slate-200 text-sm text-slate-400">
                            {/* TODO: NewsList 컴포넌트 자리 */}
                            NewsList 컴포넌트 영역
                        </div>
                    </div>

                    <div className="rounded-xl bg-white p-4 shadow-sm">
                        <h2 className="mb-3 text-lg font-semibold text-slate-900">
                            오늘의 금융 용어
                        </h2>
                        <p className="text-sm text-slate-500 mb-4">
                            하루에 한 개씩 금융 용어를 학습할 수 있습니다.
                        </p>
                        <div className="flex h-32 items-center justify-center rounded-lg border border-dashed border-slate-200 text-sm text-slate-400">
                            {/* TODO: WordOfTheDayCard 컴포넌트 자리 */}
                            WordOfTheDayCard 컴포넌트 영역
                        </div>
                    </div>
                </section>

                {/* 하단: 거래 분석 섹션 (별도 페이지 X, 메인 내부 섹션) */}
                <section className="rounded-xl bg-white p-4 shadow-sm">
                    <h2 className="mb-3 text-lg font-semibold text-slate-900">
                        거래 분석
                    </h2>
                    <p className="text-sm text-slate-500 mb-4">
                        업로드된 CSV를 기반으로 거래 내역을 표시하고, 카테고리를 변경하는
                        UI가 이 영역에 들어갈 예정입니다.
                    </p>
                    <div className="flex h-48 items-center justify-center rounded-lg border border-dashed border-slate-200 text-sm text-slate-400">
                        {/* TODO: TransactionTable 등 거래 분석 컴포넌트 자리 */}
                        TransactionTable 컴포넌트 영역
                    </div>
                </section>
            </main>
        </div>
    );
};