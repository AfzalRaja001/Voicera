"use client";

import { Settings } from "lucide-react";
import { TextInputPanel } from "../components/text-input-panel";
import { VoicePreviewPlaceholder } from "../components/voice-preview-placeholder";
import { SettingsPanel } from "../components/settings-panel";
import { defaultTTSValues, TextToSpeechForm, type TTSFormValues } from "../components/text-to-speech-form";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { TTSVoicesProvider } from "../contexts/tts-voices-context";

export function TextToSpeechView({initialValues} : {
    initialValues? : Partial<TTSFormValues>;
}){
    const trpc = useTRPC();
    const {data : voices} = useSuspenseQuery(trpc.voices.getAll.queryOptions());

    const {custom :customVoices, system : systemVoices} = voices;
    
    const allVoices = [...customVoices, ...systemVoices];
    const fallbackVoiceId = allVoices[0]?.id ?? "";

    // Requested voice may no longer exsist (deleted), fallback to first available voice
    const resolvedVoiceId = initialValues?.voiceId && allVoices.some((v) => v.id === initialValues.voiceId) ? initialValues.voiceId : fallbackVoiceId;

    const defaultValues : TTSFormValues = {
        ...defaultTTSValues,
        ...initialValues,
        voiceId : resolvedVoiceId,
    }

    return(
        <TTSVoicesProvider value={{customVoices, systemVoices, allVoices}}>
            <TextToSpeechForm defaultValues={defaultValues}>
                <div className="flex flex-1 min-h-0 overflow-hidden">
                    <div className="flex flex-1 flex-col min-h-0">
                        <TextInputPanel/> 
                        <VoicePreviewPlaceholder/> 
                    </div>
                    <SettingsPanel/>
                </div>
            </TextToSpeechForm>
        </TTSVoicesProvider>
    );
};