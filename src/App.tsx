// src/App.tsx

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { MainDashboardPage } from "./pages/MainDashboardPage";
import { MyPage } from "./pages/MyPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* 로그인 페이지 */}
                <Route path="/login" element={<LoginPage />} />

                {/* 메인 대시보드 (소비 분석 + 미션 + 뉴스 + 용어 + 거래분석) */}
                <Route path="/main" element={<MainDashboardPage />} />

                {/* 마이페이지 (CSV 업로드/삭제, 계정 관리) */}
                <Route path="/mypage" element={<MyPage />} />

                {/* 기본 진입은 /login 으로 리다이렉트 */}
                <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;