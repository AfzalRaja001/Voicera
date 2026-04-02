/*
  Warnings:

  - The values [CONVER] on the enum `VoiceCategory` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "VoiceCategory_new" AS ENUM ('AUDIOBOOK', 'CONVERSATIONAL', 'CUSTOMER_SERVICE', 'GENERAL', 'NARRATIVE', 'CHARACTERS', 'MEDITATION', 'MOTIVATIONAL', 'PODCAST', 'ADVERTISING', 'VOICEOVERS', 'CORPRATE');
ALTER TYPE "VoiceCategory" RENAME TO "VoiceCategory_old";
ALTER TYPE "VoiceCategory_new" RENAME TO "VoiceCategory";
DROP TYPE "public"."VoiceCategory_old";
COMMIT;
