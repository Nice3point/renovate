// Renovate (self-hosted) configuration for GitHub platform
// Reference: https://docs.renovatebot.com/self-hosted-configuration/

module.exports = {
    extends: [
        "group:monorepos",
        "group:recommended",
        "replacements:all",
        "workarounds:all",
        ":configMigration",
        "abandonments:recommended"
    ],

    // Managed repositories
    autodiscover: true,
    autodiscoverFilter: [
        "Nice3point/Revit*",
        "lookup-foundation/RevitLookup",
        "lookup-foundation/LookupEngine",
        "lookup-foundation/LookupEngine.UI"
    ],

    dependencyDashboard: false,
    onboarding: true,
    prHourlyLimit: 0,
    prConcurrentLimit: 0,
    semanticCommits: "disabled",

    labels: ["maintenance ⚙️"],
    ignorePresets: ["group:dotnetMonorepo"],

    // Custom package grouping rules
    packageRules: [
        {
            groupName: "Asp.Versioning",
            groupSlug: "Asp-Versioning",
            matchPackageNames: ["/Asp.Versioning/"]
        },
        {
            groupName: "Aspire",
            groupSlug: "Aspire",
            matchPackageNames: ["/Aspire/"]
        },
        {
            groupName: "dotnet-sdk",
            groupSlug: "dotnet-sdk",
            matchPackageNames: ["dotnet-sdk"],
            //1xx feature band. latestPatch policy
            allowedVersions: "/^\\d+\\.\\d+\\.1\\d\\d$/"
        },
        {
            groupName: "Microsoft.Extensions",
            groupSlug: "Microsoft-Extensions",
            matchPackageNames: ["/Microsoft.Extensions/"]
        },
        {
            groupName: "System",
            groupSlug: "system-packages",
            matchPackageNames: ["/^System\\./"]
        },
        {
            groupName: "Graylog",
            matchPackageNames: ["/graylog/"]
        },
        {
            groupName: "ModularPipelines",
            matchPackageNames: ["/ModularPipelines/"]
        },
        {
            groupName: "NetEscapades",
            matchPackageNames: ["/NetEscapades/"]
        },
        {
            groupName: "Nice3point.BenchmarkDotNet.Revit",
            matchPackageNames: ["/Nice3point\\.BenchmarkDotNet\\.Revit/"]
        },
        {
            groupName: "Nice3point.Revit.Extensions",
            matchPackageNames: ["/Nice3point\\.Revit\\.Extensions/"]
        },
        {
            groupName: "Nice3point.Revit.Toolkit",
            matchPackageNames: ["/Nice3point\\.Revit\\.Toolkit/"]
        },
        {
            groupName: "Nice3point.TUnit.Revit",
            matchPackageNames: ["/Nice3point\\.TUnit\\.Revit/"]
        },
        {
            groupName: "OpenTelemetry",
            matchPackageNames: ["/OpenTelemetry/"]
        },
        {
            groupName: "Rebus",
            matchPackageNames: ["/Rebus/"]
        },
        {
            groupName: "WixSharp",
            matchPackageNames: ["/WixSharp/"]
        },
        {
            matchPackageNames: ["/Nice3point.*Revit/"],
            matchUpdateTypes: ["major"],
            enabled: false
        }
    ]
};
