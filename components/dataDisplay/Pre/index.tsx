import React, { ReactNode } from "react";

import { CodeBlock } from "@components/index";

// Helper para extraer texto recursivamente
function extractTextFromChildren(children: ReactNode): string {
    let text = "";
    React.Children.forEach(children, (child) => {
        if (typeof child === "string") {
            text += child;
        } else if (React.isValidElement(child) && child.props.children) {
            // Si es un elemento con hijos, buscar texto dentro de él
            text += extractTextFromChildren(child.props.children);
        }
    // Ignorar otros tipos de hijos (números, booleanos, elementos sin hijos de texto)
    });
    return text;
}

// Componente Pre mejorado
function Pre({ children, ...props }: React.ComponentProps<"pre">) {
    const codeElement = React.Children.toArray(children).find(
        (child) => React.isValidElement(child) && child.type === "code"
    );

    if (!codeElement || !React.isValidElement(codeElement)) {
    // Si no hay etiqueta code, renderiza pre simple
        return <pre {...props}>{children}</pre>;
    }

    // Extraer el texto usando el helper recursivo
    const codeString = extractTextFromChildren(codeElement.props.children).trim();

    let language = codeElement.props.className?.replace("language-", "") || "bash"; // Default a bash

    // Mapear lenguajes comunes
    if (language === "typescript jsx" || language === "javascript jsx" || language === "jsx react" || language === "tsx") {
        language = "tsx";
    } else if (language === "javascript" || language === "js") {
        language = "javascript";
    } else if (language === "typescript" || language === "ts") {
        language = "typescript";
    }
    // Añadir más mapeos si es necesario

    return (
        <CodeBlock
            code={codeString} // Usar el texto extraído
            syntax={language as any}
            containerStyles={[]}
            innerStyles={[]}
        />
    );
}

export default Pre;
