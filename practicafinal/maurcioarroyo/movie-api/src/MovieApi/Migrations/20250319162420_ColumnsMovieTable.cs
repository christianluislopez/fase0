using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MovieApi.Migrations
{
    /// <inheritdoc />
    public partial class ColumnsMovieTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Author",
                table: "Movies",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "EditorialEmail",
                table: "Movies",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "EditorialPhone",
                table: "Movies",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Language",
                table: "Movies",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<DateTime>(
                name: "ReleaseDate",
                table: "Movies",
                type: "timestamp with time zone",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Author",
                table: "Movies");

            migrationBuilder.DropColumn(
                name: "EditorialEmail",
                table: "Movies");

            migrationBuilder.DropColumn(
                name: "EditorialPhone",
                table: "Movies");

            migrationBuilder.DropColumn(
                name: "Language",
                table: "Movies");

            migrationBuilder.DropColumn(
                name: "ReleaseDate",
                table: "Movies");
        }
    }
}
