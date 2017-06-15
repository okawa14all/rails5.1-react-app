namespace :ridgepole do
  desc "Apply ridgepole"
  task apply: :environment do
    run
  end

  desc "Dry run ridgepole"
  task dry_run: :environment do
    run(dry_run: true)
  end

  def run(dry_run: false)
    o, s = Open3.capture2e(*apply_command(dry_run: dry_run))
    puts o
    p s
  end

  def apply_command(dry_run: false)
    [
      'bundle', 'exec', 'ridgepole',
      '-c', 'config/database.yml',
      '-f', 'db/schema/Schemafile',
      '-E', Rails.env,
      '-a'
    ].tap do |command|
      command << '--dry-run' if dry_run
    end
  end
end
