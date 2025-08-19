import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ locals }) => {
  try {
    const { AIRTABLE_TOKEN, AIRTABLE_BASE_ID, AIRTABLE_TABLE_ID } = (locals as App.Locals).runtime.env;

    if (!AIRTABLE_TOKEN || !AIRTABLE_BASE_ID || !AIRTABLE_TABLE_ID) {
      return new Response(
        JSON.stringify({ error: "Missing Airtable configuration. Ensure AIRTABLE_TOKEN, AIRTABLE_BASE_ID, and AIRTABLE_TABLE_ID are set." }),
        {
          status: 500,
          headers: {
            "content-type": "application/json; charset=utf-8",
            "access-control-allow-origin": "*",
          },
        }
      );
    }

    const url = `https://api.airtable.com/v0/${encodeURIComponent(AIRTABLE_BASE_ID)}/${encodeURIComponent(AIRTABLE_TABLE_ID)}`;

    const airtableResponse = await fetch(url, {
      headers: {
        Authorization: `Bearer ${AIRTABLE_TOKEN}`,
      },
    });

    if (!airtableResponse.ok) {
      const text = await airtableResponse.text().catch(() => "");
      return new Response(
        JSON.stringify({ error: "Airtable request failed", status: airtableResponse.status, body: text }),
        {
          status: 502,
          headers: {
            "content-type": "application/json; charset=utf-8",
            "access-control-allow-origin": "*",
          },
        }
      );
    }

    const data = await airtableResponse.json();
    return new Response(JSON.stringify(data), {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "cache-control": "no-store",
        "access-control-allow-origin": "*",
      },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Unexpected error", message: error instanceof Error ? error.message : String(error) }),
      {
        status: 500,
        headers: {
          "content-type": "application/json; charset=utf-8",
          "access-control-allow-origin": "*",
        },
      }
    );
  }
};


