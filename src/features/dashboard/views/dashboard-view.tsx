import { PageHeader } from "@/components/page-header";
import { HeroPattern } from "../components/hero-pattern";
import { DashboardHeader } from "../components/dashboard-header";
import { TextInputPanel } from "../components/text-input-panel";
import { QuickActionsPanel } from "../components/quick-actions-panel";

export function DashboardView () {
    return (
        <div className="relative isolate">
            <PageHeader title="Dashboard" className="lg:hidden"/>
            <HeroPattern/>
            <div className="relative z-10 space-y-8 p-4 lg:p-16">
                <DashboardHeader/>
                <TextInputPanel/>
                <QuickActionsPanel />
            </div>
        </div>
    );
};