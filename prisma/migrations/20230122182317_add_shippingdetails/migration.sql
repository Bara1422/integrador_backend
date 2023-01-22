/*
  Warnings:

  - You are about to drop the `Status` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserAddress` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `shippingPrice` to the `Orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subtotal` to the `Orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total` to the `Orders` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Orders" DROP CONSTRAINT "Orders_statusId_fkey";

-- DropForeignKey
ALTER TABLE "UserAddress" DROP CONSTRAINT "UserAddress_userId_fkey";

-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "imgTag" TEXT;

-- AlterTable
ALTER TABLE "Orders" ADD COLUMN     "shippingPrice" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "subtotal" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "total" DOUBLE PRECISION NOT NULL;

-- DropTable
DROP TABLE "Status";

-- DropTable
DROP TABLE "UserAddress";

-- CreateTable
CREATE TABLE "States" (
    "id" SERIAL NOT NULL,
    "state" TEXT NOT NULL,

    CONSTRAINT "States_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "States"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
