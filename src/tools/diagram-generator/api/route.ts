import { NextRequest, NextResponse } from "next/server";
import { parse } from "terraform-parser"; // Mock parser for Terraform files

export const POST = async (req: NextRequest) => {
  try {
    // Parse the form data to get the uploaded file
    const formData = await req.formData();
    const file = formData.get("file") as File;

    // Handle missing file
    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    // Read file content
    const fileContent = await file.text();

    // Parse the Terraform file (replace with actual logic later)
    const parsedData = parse(fileContent);

    // Generate a diagram from the parsed data (replace with dynamic generation)
    const diagram = `
      graph TD
      A[Start] --> B[Process]
      B --> C[End]
    `;

    // Return the generated diagram
    return NextResponse.json({ diagram });
  } catch (error) {
    // Handle errors gracefully
    console.error("Error processing the file:", error);
    return NextResponse.json(
      { error: "Failed to process the file. Please ensure it is a valid Terraform file." },
      { status: 500 }
    );
  }
};
