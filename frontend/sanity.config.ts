import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./lib/sanity/schemas";
import { projectId, dataset, previewSecretId } from "./lib/sanity/config";
import settings from "./lib/sanity/schemas/settings";
import { pageStructure, singletonPlugin } from "./lib/sanity/plugins/settings";
