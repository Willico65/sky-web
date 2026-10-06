// Árbol de categorías aprobado (TI-11).
import type { Category } from './types'

export const CATEGORIES: Category[] = [
  {
    "name": "Computadores",
    "slug": "computadores",
    "subcategories": [
      {
        "name": "Portátiles",
        "slug": "portatiles",
        "filters": [
          "Procesador",
          "Memoria RAM (GB)",
          "Almacenamiento (GB/TB, SSD/HDD)",
          "Tamaño de pantalla (pulgadas)",
          "Sistema operativo"
        ]
      },
      {
        "name": "Equipos de escritorio",
        "slug": "equipos-de-escritorio",
        "filters": [
          "Procesador",
          "Memoria RAM (GB)",
          "Almacenamiento",
          "Formato (torre, mini)",
          "Sistema operativo"
        ]
      }
    ]
  },
  {
    "name": "Servidores",
    "slug": "servidores",
    "subcategories": [
      {
        "name": "Servidores",
        "slug": "servidores",
        "filters": [
          "Formato (torre, rack)",
          "Procesador",
          "Memoria RAM (GB)",
          "Bahías de disco"
        ]
      }
    ]
  },
  {
    "name": "Periféricos y accesorios",
    "slug": "perifericos-y-accesorios",
    "subcategories": [
      {
        "name": "Monitores",
        "slug": "monitores",
        "filters": [
          "Tamaño (pulgadas)",
          "Resolución",
          "Conexiones"
        ]
      },
      {
        "name": "Teclados y mouse",
        "slug": "teclados-y-mouse",
        "filters": [
          "Tipo",
          "Conexión (USB, inalámbrico, Bluetooth)"
        ]
      },
      {
        "name": "Accesorios de tecnología",
        "slug": "accesorios-de-tecnologia",
        "filters": [
          "Tipo",
          "Conexión"
        ]
      }
    ]
  },
  {
    "name": "UPS y baterías",
    "slug": "ups-y-baterias",
    "subcategories": [
      {
        "name": "UPS",
        "slug": "ups",
        "filters": [
          "Potencia (VA / kVA)",
          "Tecnología (standby, interactiva, online)",
          "Formato (torre, rack)",
          "Número de tomas"
        ]
      },
      {
        "name": "Baterías para UPS",
        "slug": "baterias-para-ups",
        "filters": [
          "Voltaje (V)",
          "Capacidad (Ah)"
        ]
      }
    ]
  },
  {
    "name": "Energía eléctrica",
    "slug": "energia-electrica",
    "subcategories": [
      {
        "name": "Reguladores de voltaje",
        "slug": "reguladores-de-voltaje",
        "filters": [
          "Potencia (VA / kVA)"
        ]
      },
      {
        "name": "Supresores de picos",
        "slug": "supresores-de-picos",
        "filters": [
          "Número de tomas",
          "Protección (joules)"
        ]
      },
      {
        "name": "PDU",
        "slug": "pdu",
        "filters": [
          "Número de tomas",
          "Formato (rack, piso)"
        ]
      },
      {
        "name": "Plantas eléctricas",
        "slug": "plantas-electricas",
        "filters": [
          "Potencia (kW / kVA)",
          "Combustible"
        ]
      },
      {
        "name": "Tableros eléctricos",
        "slug": "tableros-electricos",
        "filters": [
          "Tipo",
          "Capacidad (A)"
        ]
      }
    ]
  },
  {
    "name": "Redes",
    "slug": "redes",
    "subcategories": [
      {
        "name": "Switches",
        "slug": "switches",
        "filters": [
          "Número de puertos",
          "Velocidad (Mbps / Gbps)",
          "PoE (sí / no)",
          "Administrable (sí / no)"
        ]
      },
      {
        "name": "Routers",
        "slug": "routers",
        "filters": [
          "Velocidad",
          "Número de puertos"
        ]
      },
      {
        "name": "Access points",
        "slug": "access-points",
        "filters": [
          "Velocidad",
          "Uso (interior, exterior)",
          "PoE"
        ]
      },
      {
        "name": "Cableado y conectores",
        "slug": "cableado-y-conectores",
        "filters": [
          "Categoría (Cat 5e, 6, 6A)",
          "Longitud (m)"
        ]
      },
      {
        "name": "Racks y gabinetes",
        "slug": "racks-y-gabinetes",
        "filters": [
          "Tamaño (U)",
          "Tipo (pared, piso)"
        ]
      },
      {
        "name": "Patch panels",
        "slug": "patch-panels",
        "filters": [
          "Número de puertos",
          "Categoría"
        ]
      }
    ]
  },
  {
    "name": "Energía solar",
    "slug": "energia-solar",
    "subcategories": [
      {
        "name": "Paneles solares",
        "slug": "paneles-solares",
        "filters": [
          "Potencia (W)",
          "Tipo"
        ]
      },
      {
        "name": "Inversores",
        "slug": "inversores",
        "filters": [
          "Potencia (W / kW)",
          "Tipo (conectado a red, aislado, híbrido)"
        ]
      },
      {
        "name": "Controladores de carga",
        "slug": "controladores-de-carga",
        "filters": [
          "Corriente (A)",
          "Tipo (PWM, MPPT)"
        ]
      },
      {
        "name": "Baterías solares",
        "slug": "baterias-solares",
        "filters": [
          "Voltaje (V)",
          "Capacidad (Ah / kWh)",
          "Tecnología"
        ]
      },
      {
        "name": "Estructuras y soportes",
        "slug": "estructuras-y-soportes",
        "filters": [
          "Tipo de instalación (techo, suelo)"
        ]
      }
    ]
  },
  {
    "name": "Software y licencias",
    "slug": "software-y-licencias",
    "subcategories": [
      {
        "name": "Antivirus y seguridad",
        "slug": "antivirus-y-seguridad",
        "filters": [
          "Número de equipos",
          "Duración (anual, perpetua)"
        ]
      },
      {
        "name": "Ofimática",
        "slug": "ofimatica",
        "filters": [
          "Número de usuarios",
          "Duración"
        ]
      },
      {
        "name": "Sistemas operativos",
        "slug": "sistemas-operativos",
        "filters": [
          "Edición",
          "Tipo de licencia"
        ]
      },
      {
        "name": "Software empresarial",
        "slug": "software-empresarial",
        "filters": [
          "Número de usuarios",
          "Duración"
        ]
      }
    ]
  }
]

export const GLOBAL_FILTERS = ['Marca', 'Precio', 'Disponibilidad', 'Para'] as const
