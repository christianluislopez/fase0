-- CreateTable
CREATE TABLE "Book" (
    "id" TEXT NOT NULL,
    "author_name" TEXT NOT NULL,
    "editorial_email" TEXT NOT NULL,
    "editorial_number" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "language" TEXT NOT NULL,
    "datePost" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);
